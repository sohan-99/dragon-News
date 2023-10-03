// import React from 'react';

import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid md:grid-cols-4 gap-6 grid-cols-1">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" border md:col-span-2">
                    <h2 className="text-4xl">News Coming soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;