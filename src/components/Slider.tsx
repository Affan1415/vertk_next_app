"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const logos = [
    '/logos/4.svg',
    '/logos/24.svg',
    '/logos/9644.svg',
    '/logos/dmg-logo2.svg',
    '/logos/Group148.svg',
    '/logos/Hollywood.svg',
    '/logos/Sticker17.svg',
];

const Slider = () => {
    return (
        <div className="py-8">
            <Marquee speed={60} gradient={false} pauseOnHover={true}>
                {logos.map((logo, index) => (
                    <div key={index} className="mx-16">
                        <Image src={logo} alt={`Logo ${index}`} width={140} height={140} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Slider;
