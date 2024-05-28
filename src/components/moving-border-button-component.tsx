// components/MovingBorderDemo.tsx

import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderDemo() {
    return (
        <div>
            <Button
                borderRadius="1.75rem"
                className="bg-black text-white hover:bg-white hover:text-black border-neutral-200 dark:border-slate-800"
            >
                Contact Us
            </Button>
        </div>
    );
}
