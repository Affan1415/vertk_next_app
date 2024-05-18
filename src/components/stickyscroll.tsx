"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Web Development",
        description:
            "Create dynamic and interactive websites and web applications tailored to your needs. Our expert team of developers utilizes cutting-edge technologies to bring your ideas to life.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Web Development
            </div>
        ),
    },
    {
        title: "Web App Development",
        description:
            "Build scalable and feature-rich web applications that deliver exceptional user experiences. Our team specializes in crafting custom solutions to meet the unique requirements of your project.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "UI/UX Design",
        description:
            "Design intuitive and visually appealing user interfaces that enhance user engagement and satisfaction. Our design experts focus on creating seamless experiences across all digital platforms.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                UI/UX Design
            </div>
        ),
    },
    {
        title: "Software QA",
        description:
            "Ensure the quality and reliability of your software products with comprehensive testing services. Our QA specialists perform rigorous testing to identify and eliminate any defects, ensuring a seamless user experience.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Software QA
            </div>
        ),
    },
];

export default function StickyScrollRevealDemo() {
    return (
        <div className="p-25">
            <StickyScroll content={content} />
        </div>
    );
}
