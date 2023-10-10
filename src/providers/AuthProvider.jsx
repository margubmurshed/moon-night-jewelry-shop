import React, { createContext, useEffect, useState } from 'react';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, updateCurrentUser, signOut} from 'firebase/auth';
import {app} from '../../firebase.config';

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            setLoading(false)
        })
    }, [])

    const emailPassSignIn = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const emailPassSignUp = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const googleSignIn = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const updateUser = (name, photourl) => {
        return updateCurrentUser(auth, {displayName: name, photoURL: photourl})
    }
    const logOut = () => {
        return signOut(auth);
    }
    const value = {user, loading, emailPassSignIn,
        emailPassSignUp,
        googleSignIn, updateUser, logOut};
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;