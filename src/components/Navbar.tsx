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

import { MovingBorderDemo } from "./moving-border-button-component"

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuItems: string[] = [
        "Home",
        "Services",
        "About Us",
    ];

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
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem className="mx-5">
                    <Link color="foreground" href="#">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem className="mx-5">
                    <Link color="foreground" href="#">
                        About Us
                    </Link>
                </NavbarItem>
            </NavbarContent>


            <NavbarContent justify="end">
                <NavbarItem>
                    <button className="shadow-[inset_0_0_0_2px_#003049] text-black px-6 py-2 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#003049] hover:text-white dark:text-neutral-200 transition duration-200">
                        Contact Us
                    </button>


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
