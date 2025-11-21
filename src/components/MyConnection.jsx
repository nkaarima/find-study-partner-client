import React, { use, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../context/AuthContext';


const MyConnection = () => {

    const [studyPartner,setStudyPartner] = useState([]);
    const {user} = use(AuthContext);

    const axiosInstance= useAxios();
     
    axiosInstance.get(`/studyPartnerRequest?email=${user.email}`)
    .then(data => {

        //console.log(data);

        setStudyPartner(data.data);
    })


  

    return (
        // <div className="grid grid-cols-1 md:grid-cols-3">
        //     {
        //         studyPartner.map(userProfile => <StudyPartnerProfile key={userProfile._id} userProfile={userProfile}></StudyPartnerProfile>)
        //     }
        // </div>

        <table className="table text-[18px]">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                              SL no.
                            </th>
                            <th>Name</th>
                            <th>Profile Pic</th>
                            <th>Subject</th>
                            <th>Study Mode</th>
                            <th>Actions</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        
                        {
                            studyPartner.map((partner,index) =>
                   
                             <tr>
                            <th>{index + 1}</th>
                            <td>
                            <div className="flex items-center gap-3">
                                
                                <div>
                                <div className="font-bold">{partner.name}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                           <img src={partner.profileimage} className="w-[150px] h-[150px] rounded-[75px]" alt="" />
                            </td>
                            <td>{partner.subject}</td>
                            <td>{partner.studyMode}</td>

                            
                            <th>
                            <button className="btn btn-soft btn-primary mr-2 text-[18px]">Delete</button>
                            <button className="btn btn-soft btn-primary text-[18px]">Update</button>
                            </th>
                        </tr>
                        )}
                       
                    
                        </tbody>

                    </table>
    );
};

export default MyConnection;