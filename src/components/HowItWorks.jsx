import React from 'react';
import virtualImg from '../assets/virtual study.jpg'


const HowItWorks = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">How It Works</h1>

                <div className="flex flex-col space-y-2.5 justify-between items-center mt-5 text-[20px] md:flex-row">

                    <img src={virtualImg} className="" alt="" />
                     
                    <p>Connect to motivated students across a wide range of subjects</p>
                 
                 

                </div>
                
                
            
        </div>
    );
};

export default HowItWorks;