import React from 'react';
import HowItWorks from './HowItWorks';
import Review from './Review';
import Slider from './Slider';
import TopStudyPartners from './TopStudyPartners';

const Home = () => {
    return (
        <div className="w-11/12 mx-auto space-y-[50px]">
            <Slider></Slider>
            <TopStudyPartners></TopStudyPartners>
            <HowItWorks></HowItWorks>
            <Review></Review>
        </div>
    );
};

export default Home;