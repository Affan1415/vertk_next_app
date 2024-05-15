import React from "react";
import Marquee from "react-fast-marquee";

const Announcement = ({ direction,color }) => (
    

    <Marquee 
    direction={direction} 
    gradientColor="orange"
    pauseOnHover = "true"
    >
        <div className="text-1">
            <span>This is announcement 1</span>
        </div>
        <div className="text-2">
            <span>This is announcement 2</span>
        </div>
    </Marquee>
);

export default Announcement;