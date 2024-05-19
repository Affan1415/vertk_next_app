import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Heroglobe from "@/components/HeroSection-globe"
import Herogemini from "@/components/hero-gemini"
import FlipWordsDemo from "@/components/flipwords-component"
import StickyScrollRevealDemo from "@/components/stickyscroll"
import {InfiniteMovingCardsDemo} from "@/components/testimonials"
import { LampDemo } from "@/components/lamp-component";
import {SignupFormDemo} from "@/components/contact-form"
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {/* <Heroglobe/> */}
        <Herogemini/>
        <FlipWordsDemo/>
        <StickyScrollRevealDemo/>
        <InfiniteMovingCardsDemo/>
        <LampDemo/>
        <SignupFormDemo/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
