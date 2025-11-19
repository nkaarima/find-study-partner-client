import React from 'react';
import virtualImg from '../assets/study group2.webp'


const HowItWorks = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">How It Works</h1>

                <div className="flex flex-col space-y-2.5 justify-between items-center mt-5 text-[20px] md:flex-row">

                    <img src={virtualImg} className="h-[400px]" alt="" />
                     
                    <ul className="space-y-2">
                        <li>Select your course, time and study mode</li>
                        <li>Send a request to future collaborators</li>

                    </ul>
                 
                 

                </div>
                
                
            
        </div>
    );
};

export default HowItWorks;