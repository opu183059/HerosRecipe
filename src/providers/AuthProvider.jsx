import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const Authcontect = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://project-1-server-opu183059.vercel.app/allData")
      .then((res) => res.json())
      .then((data) => setData(data.people));
  }, []);
  // console.log(data);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  const signGithub = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (curentUser) => {
      // console.log("auath state change", curentUser);
      setUser(curentUser);
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);

  const authInfo = {
    data,
    user,
    createUser,
    signIn,
    logOut,
    loading,
    signGoogle,
    signGithub,
  };
  return (
    <Authcontect.Provider value={authInfo}>{children}</Authcontect.Provider>
  );
};

export default AuthProvider;
