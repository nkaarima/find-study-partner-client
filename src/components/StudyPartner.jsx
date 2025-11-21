import React from 'react';
import { Link } from 'react-router';

const StudyPartner = ({user}) => {

    const {_id,name,profileimage,subject,studyMode,experienceLevel} = user;
    return (
        <div>
             <img src={profileimage} className="w-[400px] h-[360px]" alt="" />
             <div className="space-y-2.5  text-[18px]">
                 <h1 className="text-2xl font-bold">{name}</h1>
                <p>Subject: {subject}</p>
                <p>Study Mode: {studyMode}</p>
                <p>Experience Level: {experienceLevel}</p>
                 <Link to={`/details/${_id}`} className="btn btn-soft btn-primary text-[18px]">View Profile Button</Link>
             </div>
            
        </div>
    );
};

export default StudyPartner;