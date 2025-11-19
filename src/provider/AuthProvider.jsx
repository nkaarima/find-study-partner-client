import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';

const auth= getAuth(app);

const gooogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
         
        setLoading(true);

         return createUserWithEmailAndPassword(auth,email,password);
    }


    const updateUser= (updatedData) => {

         return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () => {

        return signOut(auth);

    }

    const logIn = (email,password) => {

        setLoading(true);

         return signInWithEmailAndPassword(auth,email,password);
    }

    const logInWithGoogle = () => {
        return signInWithPopup(auth,gooogleProvider);
    }

    useEffect(()=> {

    const unsubscribe= onAuthStateChanged(auth, (currentUser) => {

          setUser(currentUser);
          setLoading(false);

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
        logIn,
        logInWithGoogle,
        loading,
    }
 
   
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;