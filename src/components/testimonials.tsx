"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ContentItem {
    name: string;
    designation: string;
    company: string;
    saying: string;
    // imageUrl: string;
}

// Sample content array
const contentArray: ContentItem[] = [
    {
        name: "Gregory Silason",
        designation: "CEO",
        company: "DMG Wellness",
        saying: "I came to Vertk for a complete business setup online, including my websites and other aspects of my business. They did a fantastic job in bringing my vision to life.",
        // imageUrl: "#",
    },
    {
        name: "David Ton",
        designation: "Author",
        company: "Learn and Talk Tonian",
        saying: "Vertk developed a calculation-based website for me, which perfectly meets my needs. Their expertise and attention to detail are exceptional.",
        // imageUrl: "https://media.licdn.com/dms/image/D5603AQGt6b64rZOs1A/profile-displayphoto-shrink_400_400/0/1634256110988?e=1727308800&v=beta&t=fO425ZC_KEAbriEt3qXdNPwMIB9c60Xu5hXnQQn-kPo",
    },
    // Add more items as needed
];

export function ThreeDCardDemo() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-[#003049] mb-4">Our Success Stories</h1>
            <p className="text-center text-neutral-800 max-w-3xl mb-4">
                We take pride in the achievements of our team and the success stories of our clients. 
                Our journey is filled with inspiring moments and milestones that reflect our dedication 
                to innovation and excellence. Here are some of the remarkable stories that showcase 
                the impact of our work.
            </p>
            <div className="flex flex-wrap justify-center">
                {contentArray.map((item, index) => (
                    <CardContainer key={index} className="inter-var m-2">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {item.name}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {item.designation} , {item.company}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                &quot;{item.saying}&quot;
                            </CardItem>
                            {/* <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={item.imageUrl}
                                    height={1000}
                                    width={1000}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem> */}
                            
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
