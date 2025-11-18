import React from 'react';
import studyImg from '../assets/study group.webp'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className="bg-[#D3D3D3]">
            <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center gap-2">
                            <img src={studyImg} className=" p-2.5 w-[120px] h-[120px] rounded-lg" alt="" />
                             <h1 className="font-bold text-3xl">Study Mate</h1>
                         </div>
            <p className="text-[18px] text-center md:text-left">
            Our platform enables students to collborate with each other</p>

             <div className="flex gap-[5px] pr-2">
                <FaFacebookF size={20}></FaFacebookF>
                <FaXTwitter size={20}></FaXTwitter>
                <FaInstagram size={20}></FaInstagram>
             </div>

            
            </div>
         <p className="text-center">2025 All Rights Reserved- Study Mate</p>
        </div>

        
    );
};

export default Footer;