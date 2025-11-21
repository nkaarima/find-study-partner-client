import React from 'react';
import { Link } from 'react-router';

const TopStudentProfile = ({student}) => {
    return (
        
         <div className="card bg-base-200 w-96 shadow-sm text-[18px]">
            <h1 className="text-center p-3">{student.name}</h1>
        <figure className="px-10 pt-10">
            <img
            src={student.profileimage}
            className="w-[150px] h-[150px] rounded-[75px]" />
        </figure>

        <div className="card-body items-center text-center">
            <p>{student.subject}</p>
            <p>{student.rating}</p>
            <div className="card-actions">
            <Link to={`/details/${student._id}`} className="btn btn-soft btn-primary text-[18px]">View Profile</Link>
            </div>
        </div>
        </div>
    );
};

export default TopStudentProfile;