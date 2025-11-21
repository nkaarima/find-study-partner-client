import React, { use, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../context/AuthContext';
import StudyPartner from './StudyPartner';

const FindPartner = () => {

    const {user} = use(AuthContext);

    const [studyPartner,setStudyPartner] = useState([]);

    const axiosInstance= useAxios();

    axiosInstance.get('/studyPartner')
    .then(data=> {
       const users= data.data;
       const remainingUser= users.filter(userdB=> userdB.name !== user.displayName);
       setStudyPartner(remainingUser);
       //console.log(remainingUser);
       
    })
    return (
        <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-3">
           {
           studyPartner.map(user=> <StudyPartner user={user}></StudyPartner>)
           }

        </div>
    );
};

export default FindPartner;