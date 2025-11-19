import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyProfile = () => {

    const {user} = use(AuthContext);
    return (
       
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center font-bold p-2">Profile Info</h1>
            <form className="card-body">
                    <fieldset className="fieldset">

                    <label className="label">Name</label>
                    <input type="text" name="email" className="input" defaultValue={user.displayName}/>

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" defaultValue={user.email} />

                    <label className="label">Photo</label>
                    <img src={user.photoURL} className="w-[150px] h-[150px]"></img>
                    </fieldset>
                </form>
        </div>
    );
};

export default MyProfile;