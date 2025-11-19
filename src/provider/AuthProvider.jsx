import React from 'react';
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';

const auth= getAuth(app);

const AuthProvider = ({children}) => {

    const createUser = (email,password) => {

         return createUserWithEmailAndPassword(auth,email,password);
    }



    const authData={

        createUser,
    }
 
   
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;