import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';

const auth= getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const createUser = (email,password) => {

         return createUserWithEmailAndPassword(auth,email,password);
    }


    const updateUser= (updatedData) => {

         return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () => {

        return signOut(auth);

    }

    useEffect(()=> {

    const unsubscribe= onAuthStateChanged(auth, (currentUser) => {

          setUser(currentUser);

    });

    return ()=> {
         unsubscribe();
    }



    },[])




    const authData={

        createUser,
        updateUser,
        user,
        setUser,
        logOut,
    }
 
   
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;