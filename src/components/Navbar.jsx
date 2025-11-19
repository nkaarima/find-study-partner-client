import React from 'react';
import studyImg from '../assets/study group.webp'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="bg-[#D8BFD8] space-y-2.5 flex flex-col items-center justify-between md:flex-row">
             <div className="flex items-center gap-2">
                <img src={studyImg} className=" p-2.5 w-[120px] h-[120px] rounded-lg" alt="" />
                 <h1 className="font-bold text-3xl">Study Mate</h1>
             </div>

                <ul className="flex flex-col items-center gap-2.5 text-[18px] md:flex-row">
                    
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/findPartner">Find Partners</NavLink></li>
                 <li><NavLink to="/login">Login</NavLink></li>
                </ul>

                
                <div>
                     <Link to="/login" class="btn btn-soft btn-primary mr-2.5 text-[18px]">Login</Link>
                    <Link to="/register" class="btn btn-soft btn-primary mr-2 text-[18px]">Register</Link>
                </div>
                
  
             
     </div>
    );
};

export default Navbar;