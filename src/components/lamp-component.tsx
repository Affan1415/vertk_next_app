"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function LampDemo() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                About Us 
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-6 text-center text-gray-700 md:text-lg"
            >
                <p>
                    Welcome to our world of innovation and creativity! At our company, we re passionate about crafting exceptional digital experiences that empower businesses to succeed.
                </p>
                <p>
                    With a team of dedicated professionals and a commitment to excellence, we strive to deliver cutting-edge solutions that not only meet but exceed our clients expectations.
                </p>
                <p>
                    Whether you re a startup looking to disrupt the market or an enterprise seeking to innovate, we re here to help you achieve your goals and realize your vision.
                </p>
            </motion.div>
        </LampContainer>
    );
}
