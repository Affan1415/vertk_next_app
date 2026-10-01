#!/bin/sh
# Detect the config-file code injection used by the npm supply-chain worm that
# hit this machine (see SECURITY-INCIDENT.md).
#
# The payload appends itself to a build config — postcss/tailwind/next/vite/
# eslint — after the legitimate `export default`, padded with whitespace so the
# file still looks normal in an editor. It then resolves a C2 address from an
# Ethereum transaction and runs `spawn("node", ["-e", ...], {detached:true})`.
#
# Because Next.js loads postcss.config.mjs on every dev/build/lint, an injected
# config re-launches the malware on any ordinary command.
#
# Exit 1 if anything looks injected. Run standalone or via the pre-commit hook.

set -e
cd "$(git rev-parse --show-toplevel 2>/dev/null || echo .)"

found=0
note() { printf '  [INJECTED] %s\n    %s\n' "$1" "$2"; found=1; }

# Config files only — app code legitimately contains long lines and createRequire.
configs=$(find . \
  \( -name "postcss.config.*" -o -name "tailwind.config.*" \
     -o -name "next.config.*" -o -name "vite.config.*" \) \
  -not -path "*/node_modules/*" -not -path "*/.git/*" \
  -not -path "*/.next/*" -not -path "*/dist/*" -not -path "*/build/*" \
  2>/dev/null)

for f in $configs; do
  [ -f "$f" ] || continue

  # 1. Payload appended after the config's real end, hidden behind padding.
  if grep -qE 'export default [A-Za-z_]+;[[:space:]]{20,}[^[:space:]]' "$f" 2>/dev/null; then
    note "$f" "code appended after 'export default', hidden behind whitespace padding"
    continue
  fi

  # 2. A build config has no business being this long.
  if awk '{ if (length($0) > 1500) exit 0 } END { exit 1 }' "$f" 2>/dev/null; then
    note "$f" "line longer than 1500 chars — obfuscated payload"
    continue
  fi

  # 3. Known C2 fetch paths and the loader's detached respawn.
  if grep -qE '/0x/(ls|cls|cl|clb)|spawn\([[:space:]]*"node"[[:space:]]*,[[:space:]]*\[[[:space:]]*"-e"' "$f" 2>/dev/null; then
    note "$f" "C2 fetch path or detached 'node -e' respawn"
    continue
  fi
done

if [ "$found" -eq 1 ]; then
  cat <<'EOF'

Malware injection detected in a build config. Do NOT run dev/build/lint —
loading the config is what executes the payload.

  1. Restore the file (git checkout -- <file>, or delete everything after
     the legitimate `export default config;`).
  2. Kill any spawned loaders:  pkill -9 -f "node -e"
  3. Check for live C2 traffic:  lsof -nP -i | grep -i node
  4. Read SECURITY-INCIDENT.md before continuing.
EOF
  exit 1
fi

echo "config injection scan: clean"
