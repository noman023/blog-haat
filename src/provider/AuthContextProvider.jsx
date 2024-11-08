import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { getAuth } from "firebase/auth";

import { app } from "../firebase/firebase.config";

// create context
export const AuthContext = createContext(null);

const auth = getAuth(app);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleAuthProvider = new GoogleAuthProvider();

  //   create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // login user with email and password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout the user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // create user with google
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const userInfo = {
    createUser,
    logIn,
    logOut,
    loginWithGoogle,
    updateUserProfile,
    user,
    loading,
  };

  useEffect(() => {
    // observe user's state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(user);
    });

    // stop observer
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
