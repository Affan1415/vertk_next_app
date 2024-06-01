"use client"
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const logos = [
    '/logos/3m.svg',
    '/logos/barstool-store.svg',
    '/logos/budweiser.svg',
    '/logos/buzzfeed.svg',
    '/logos/forbes.svg',
    '/logos/macys.svg',
    '/logos/menshealth.svg',
    '/logos/mrbeast.svg',
];

const Slider = () => {
    return (
        <div className="py-8">
            <Marquee speed={60} gradient={false} pauseOnHover={true}>
                {logos.map((logo, index) => (
                    <div key={index} className="mx-16">
                        <Image src={logo} alt={`Logo ${index}`} width={120} height={120} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Slider;
