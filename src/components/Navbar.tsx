"use client";
import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./Logo";
import { Link as ScrollLink } from 'react-scroll';

import { MovingBorderDemo } from "./moving-border-button-component"

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuItems: string[] = [
        "Home",
        "Services",
        "About Us",
    ];
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="navbar-transparent">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    {/* <p className="font-bold text-inherit">Vertk</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="center">
                <NavbarItem className="mx-5">
                <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        color="primary"
                    >
                        home
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem className="mx-5">
                    <ScrollLink
                        to="services"
                        smooth={true}
                        offset={-100}
                        duration={500}
                        color="primary"
                    >
                        Services
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem className="mx-5">
                    <ScrollLink
                        to="about"
                        offset={-100}
                        smooth={true}
                        duration={500}
                        color="primary"
                    >
                        About Us
                    </ScrollLink>
                </NavbarItem>
            </NavbarContent>



            <NavbarContent justify="end">
                <NavbarItem>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        color="primary"
                    >
                        <button className="shadow-[inset_0_0_0_2px_#003049] text-black px-6 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#003049] hover:text-white dark:text-neutral-200 transition duration-200">
                            Contact Us
                        </button>
                    </ScrollLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
