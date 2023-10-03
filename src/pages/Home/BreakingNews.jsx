/* eslint-disable no-unused-vars */
// import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;