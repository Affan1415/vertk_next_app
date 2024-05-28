"use client"
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

interface CardContent {
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
}

interface ThreeDCardProps {
    content: CardContent[];
}

const ThreeDCardDemo: React.FC<ThreeDCardProps> = ({ content }) => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div style={{ padding: "20px 0" }}>
            <div style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', padding: '20px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Our success stories</h1>
            </div>

            <Marquee speed={100} direction="left" pauseOnHover={true}>
                {content.map((card, index) => (
                    <div key={index} style={{ marginRight: '10px' }}>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-black relative group/card text-white border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem translateZ="50" className="text-xl font-bold">
                                    {card.title}
                                </CardItem>
                                <CardItem as="p" translateZ="60" className="text-sm max-w-sm mt-2">
                                    {card.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image src={card.image} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl" alt="thumbnail" />
                                </CardItem>
                                <div className="flex justify-end mt-20">
                                    <CardItem as={Link} href={card.link} target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal">
                                        {card.linkText}
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                        <Divider className="flex h-5" orientation="vertical" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default ThreeDCardDemo;
