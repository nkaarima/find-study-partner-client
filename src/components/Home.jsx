import React from 'react';
import HowItWorks from './HowItWorks';
import Review from './Review';
import Slider from './Slider';

const Home = () => {
    return (
        <div className="w-11/12 mx-auto space-y-4">
            <Slider></Slider>
            <HowItWorks></HowItWorks>
            <Review></Review>
        </div>
    );
};

export default Home;