import React from 'react';
import Image from 'next/image';

interface SliderProps {
    speed: number; // speed in seconds
    height: number; // height of the logos
    pauseOnHover?: boolean; // pause on hover
}

const Slider: React.FC<SliderProps> = ({ speed, height, pauseOnHover = true }) => {
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

    const slideStyle = {
        animationDuration: `${speed}s`,
    };

    return (
        <div className="slider-container">
            <div className="slider-track" style={slideStyle}>
                {logos.map((logo, index) => (
                    <div key={index} style={{ height: `${height}px`, width: 'auto' }}>
                        <Image src={logo} alt="logo" height={height} width={height * 2} />
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div key={index + logos.length} style={{ height: `${height}px`, width: 'auto' }}>
                        <Image src={logo} alt="logo" height={height} width={height * 2} />
                    </div>
                ))}
            </div>
            {pauseOnHover && (
                <style>{`
          .slider-container:hover .slider-track {
            animation-play-state: paused;
          }
        `}</style>
            )}
        </div>
    );
};

export default Slider;
