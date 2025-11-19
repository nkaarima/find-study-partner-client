import React, { use } from 'react';
import studyImg from '../assets/study group.webp'
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

     const {user,logOut} = use(AuthContext);

     const navigate= useNavigate();

      const handleLogout = () => {

         logOut()
         .then(() => {
            navigate('/');
         })

     }


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

                 {user && <>
                 
                   <li><NavLink to="/createProfile">Create Partner Profile</NavLink></li>
                   <li><NavLink to="/connections">My Connections</NavLink></li>
                 
                 </>}
                </ul>

                
                <div>
                    {
                        user ? <>
                        
                        <details className="dropdown">

                             <summary><img src={user.photoURL} className=" p-2.5 w-[100px] h-[100px] rounded-[50px]"></img></summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                               <li><NavLink to="/myProfile">My Profile</NavLink></li>
                               <li><button onClick={handleLogout}>Logout</button></li>
                                
                            </ul>
                            </details>
                        </>
                        
                        
                        : <>
                        
                         <Link to="/login" className="btn btn-soft btn-primary mr-2.5 text-[18px]">Login</Link>
                    <     Link to="/register" className="btn btn-soft btn-primary mr-2 text-[18px]">Register</Link>
                        </>
                    }
                    
                </div>
                
  
             
     </div>
    );
};

export default Navbar;