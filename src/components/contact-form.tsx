"use client";
import React from "react";
import CalendlyInlineWidget from './ui/CalendlyInlineWidget';
import { BackgroundGradient } from "./ui/background-gradient";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { WavyBackground } from "./ui/wavy-background";

export function SignupFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className=" w-full mx-auto"> {/* Adjusted max-width */}
            <h1 className="text-5xl text-center font-bold text-gray-800 font-poppins ">Contact Us.</h1>
            <p className=" text-gray-700 mt-4 text-center"
                style={{ fontSize: "1.2rem" }}>Got questions, feedback, or inquiries? Reach out to us through our contact form below. We&apos;re here to listen and respond promptly to your needs.</p>
            <CalendlyInlineWidget />

            {/* Calendly inline widget */}
        </div>

    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
