import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';

const CreateProfile = () => {

    const {user} = use(AuthContext);

    const axiosInstance= useAxios();

    const handleCreateProfile = (event) => {
         
         event.preventDefault();

         const form= event.target;
        
         const name= form.name.value;
         const profileimage= form.profileimage.value;
         const subject= form.subject.value;
         const studyMode= form.studyMode.value;
         const availabilityTime= form.availabilityTime.value;
         const location= form.location.value;
         const experienceLevel= form.experienceLevel.value;
         const rating= parseInt(form.rating.value);
         const partnerCount= parseInt(form.partnerCount.value);

         const user={
            name,profileimage,subject,
            studyMode,availabilityTime,location,experienceLevel,rating
            ,partnerCount
         }

         axiosInstance.post('/studyPartner', user)
         .then(data => {

             //console.log(data.data);

             if(data.data.insertedId)
             {
                user._id= data.data.insertedId;
                toast.success('Your profile has been created')

             }
         })

         


    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center font-bold p-2">Create Your Profile!</h1>

                <form onSubmit={handleCreateProfile} className="card-body">
                    <fieldset className="fieldset grid grid-cols-2 items-center text-[18px]">

                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />

                     <label className="label">Profile Image</label>
                    <input type="text" name="profileimage" className="input" placeholder="Photo" />

                    <label className="label">Subject</label>
                    <input type="text" name="subject" className="input" placeholder="Subject" />

                    <label className="label">Study mode</label>
                    <input type="text" name="studyMode" className="input" placeholder="Study mode" />

                    <label className="label">Available time</label>
                    <input type="text" name="availabilityTime" className="input" placeholder="Time" />

                    <label className="label">Location</label>
                    <input type="text" name="location" className="input" placeholder="location" />

                    <label className="label">Experience Level</label>
                    <input type="text" name="experienceLevel" className="input" placeholder="experience" />

                     <label className="label">Rating</label>
                    <input type="text" name="rating" className="input" placeholder="rating" />

                     <label className="label">Connections Count</label>
                    <input type="text" name="partnerCount" className="input" placeholder="Connections Count" />

                     <label className="label">Email</label>
                    <input type="email" name="email" className="input" defaultValue={user.email} />

                    
                    </fieldset>
                     <button type="submit" className="btn btn-soft btn-primary mt-4">Create Profile</button>
                </form>
                  
                 
                </div>
    );
};

export default CreateProfile;