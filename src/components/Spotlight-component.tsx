import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";

const SpotlightPreview: React.FC = () => {
    const menuItems: string[] = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <div>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#ffb208" style={{ zIndex: 1 }} />
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-[#f4f4f4] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-black bg-opacity-50">
                        Transforming <br /> ideas into digital realities.
                    </h1>
                    <p className="mt-4 font-normal text-base text-black max-w-lg text-center mx-auto">
                        Spotlight effect is a great way to draw attention to a specific part
                        of the page. Here, we are drawing the attention towards the text
                        section of the page. I don&apos;t know why but I&apos;m running out of
                        copy.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default SpotlightPreview;
