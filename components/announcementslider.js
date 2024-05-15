import React from "react";
import Announcement from "./misc/announcement";

const AnnouncementSlider = () => (
    <div>
        <div className= "announcement font">

                <h1>Announcements</h1>
        </div>
        <div className="announcement "> {/* Apply black background and white text */}

            <div className="announcement black-bg"> {/* Apply black background and white text */}
                <Announcement direction="right" />
            </div>
            <div className="announcement white-bg"> {/* Apply white background and black text */}
                <Announcement direction="left" />
            </div>
            <div className="announcement black-bg"> {/* Apply black background and white text */}
                <Announcement direction="right" />
            </div>
            <br></br>
            <br></br>
        </div>
    </div>
);

export default AnnouncementSlider;
