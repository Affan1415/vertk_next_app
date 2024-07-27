import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Herogemini from "@/components/hero-gemini"
import FlipWordsDemo from "@/components/flipwords-component"
import StickyScrollRevealDemo from "@/components/stickyscroll"
import {ThreeDCardDemo} from "@/components/testimonials"
import { LampDemo } from "@/components/lamp-component";
import { SignupFormDemo } from "@/components/contact-form"
import Footer from "@/components/Footer";
import SpotlightPreview from "@/components/Spotlight-component"
import { NextUIProvider } from "@nextui-org/system";
import { Divider } from "@nextui-org/divider";
import Slider from '../components/Slider';
import { BentoGridThirdDemo } from "@/components/blogs"
import AboutUs from "@/components/about-us";
import Head from 'next/head';
//import ServicesSection from '../components/ServicesSection';
import {CardHoverEffectDemo} from '../components/service-cards';

const inter = Inter({ subsets: ["latin"] });
const content = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    image: "https://example.com/image1.jpg",
    link: "https://example.com",
    linkText: "Try now →",
    buttonText: "Sign up",
  },
  {
    title: "Create Stunning Websites",
    description: "Discover how to create stunning websites with ease",
    image: "https://example.com/image2.jpg",
    link: "https://example.com",
    linkText: "Learn more →",
    buttonText: "Join now",
  },

  // Add more items as needed
];

export const metadata: Metadata = {
  title: "Vertk - Home",
  description: "Transforming Ideas Into Digital Realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar />
          <section id="home">
            <SpotlightPreview />
          </section>
          <Divider className="my-6" />
          <Slider />

          <section id="services">
            <Divider className="my-6" />
            <div>
              <CardHoverEffectDemo />
            </div>
            {/* <CardHoverEffectDemo /> */}
          </section>
          <ThreeDCardDemo />
          <section id="about us">
            <Divider className="my-6" />
            <AboutUs />
          </section>
          <Divider className="my-6" />
          <section id="contact">
            <SignupFormDemo />
          </section>
          <Divider className="my-6" />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
