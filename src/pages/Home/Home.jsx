// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid md:grid-cols-4 gap-6 grid-cols-1">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="  md:col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews} ></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;