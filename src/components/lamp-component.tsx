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
                    Welcome to Vertk, where innovation meets expertise!
                </p>
                <p>
                    At Vertk, we&rsquo;re not just another tech company; we&rsquo;re your partners in digital transformation. With a passion for technology and a drive for excellence, we are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital age.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Our mission is simple yet ambitious: to revolutionize the way businesses leverage technology. We believe that every problem has a solution, and we&rsquo;re here to engineer it. Whether it&rsquo;s building intuitive mobile apps, crafting stunning web interfaces, or architecting scalable cloud solutions, we&rsquo;re dedicated to pushing the boundaries of what&rsquo;s possible.
                </p>
                <h2>What Sets Us Apart</h2>
                <p>
                    What sets us apart is our relentless pursuit of perfection. We don&rsquo;t just build software; we craft experiences. Our team of skilled developers, designers, and strategists work collaboratively to bring your vision to life, ensuring every detail is meticulously crafted to exceed your expectations.
                </p>
                <h2>Why Choose Us</h2>
                <ul>
                    <li><strong>Expertise:</strong> With years of industry experience, we have the knowledge and skills to tackle even the most complex challenges.</li>
                    <li><strong>Innovation:</strong> We stay ahead of the curve by embracing the latest technologies and trends, ensuring your solutions are always cutting-edge.</li>
                    <li><strong>Collaboration:</strong> We believe in the power of collaboration. We work closely with our clients every step of the way, ensuring transparency, communication, and alignment.</li>
                    <li><strong>Results-Driven:</strong> Your success is our success. We&rsquo;re committed to delivering tangible results that drive business growth and transformation.</li>
                </ul>
                <h2>Our Promise</h2>
                <p>
                    When you partner with Vertk, you&rsquo;re not just getting a service; you&rsquo;re getting a commitment to excellence. We&rsquo;re dedicated to delivering solutions that not only meet your needs but exceed your expectations. From concept to launch and beyond, we&rsquo;re with you every step of the way, ensuring your success in the digital world.
                </p>
                <h2>Let&rsquo;s Build Something Incredible Together</h2>
                <p>
                    Ready to take your business to the next level? Let&rsquo;s connect and explore how we can turn your ideas into reality. Whether you&rsquo;re a startup looking to disrupt the market or an enterprise seeking to innovate, we&rsquo;re here to help you succeed. Get in touch with us today and let&rsquo;s embark on a journey of innovation, creativity, and growth!
                </p>
            </motion.div>
        </LampContainer>
    );
}
