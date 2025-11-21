import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';
import TopStudentProfile from './TopStudentProfile';

const TopStudyPartners = () => {

    const [students,setStudents] = useState([]);

    const axiosInstance=useAxios();
    axiosInstance.get('/top3')
    .then(data=> {

         setStudents(data.data);

         
    })
    return (
        <div>
            <h1 className="font-bold text-3xl text-center mb-3.5">Top Study Partners</h1>

            <div className="grid grid-cols-1 md:grid-cols-3">
                 {
                    students.map(student => <TopStudentProfile key={student._id} student={student}></TopStudentProfile>)
                 }
            </div>


        </div>
    );
};

export default TopStudyPartners;