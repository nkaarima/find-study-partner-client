import React from 'react';
import HowItWorks from './HowItWorks';
import Review from './Review';

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <HowItWorks></HowItWorks>
            <Review></Review>
        </div>
    );
};

export default Home;