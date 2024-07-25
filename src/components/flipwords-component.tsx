import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";

export default function FlipWordsDemo() {
    const words = ["better", "cute", "beautiful", "modern"];

    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="h-[40rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="max-w-screen-xl px-100"> {/* Adjusted width and padding */}
                        <Boxes />
                        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                            Build
                            <FlipWords words={words} /> <br />
                            Apps with <span className="text-5xl font-bold text-blue-500">Vertk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
