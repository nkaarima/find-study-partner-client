import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';

const StudyPartnerDetails = () => {

    const [studyPartner,setStudyPartner] = useState({});

     const {id}= useParams();
     //console.log(id);
   
    const axiosInstance= useAxios();
 
    axiosInstance.get(`/studyPartner/${id}`)
    .then(data => {
        const user=data.data;

        setStudyPartner(user);
       

    })

    const handleRequest= (patnerCount,id) => {
    
         const updateCount={
            
          newCount: patnerCount+1};

    axiosInstance.put(`/studyPartnerCount/${id}`, updateCount)
    .then(res => {

         console.log('Updated',res.data);
         toast.success('Request has been send');
    })

    .catch(error => {

         toast.error(`${error.message}`)
    })
         
    }


    

    return (
        
                <div className="hero bg-base-200 min-h-screen">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src= {studyPartner.profileimage} className="max-w-sm rounded-lg shadow-2xl"/>
                                    <div>

                                    <h1 className="text-5xl font-bold">{studyPartner.name}</h1>
                                            <div className="space-y-4">
                                                <p>Rating: {studyPartner.rating}</p>
                                                <p>Subject: {studyPartner.subject}</p>
                                                <p>StudyMode: {studyPartner.studyMode}</p>
                                                <p>Available Time: {studyPartner.availaibilityTime}</p>
                                                <p>Location: {studyPartner.location}</p>
                                                <p>Experice: {studyPartner.experienceLevel}</p>
                                                <p>Cuurent Study Partner Count: {studyPartner.patnerCount}</p>
                                                <button onClick={()=> handleRequest(studyPartner.patnerCount,id)} className="btn btn-primary">Send Partner Request</button>
                                            </div>
                            
                                    </div>
                            </div>
                    </div>
       
    );
};

export default StudyPartnerDetails;