import React, { useContext, useState, useEffect } from "react";
import { auth } from "./Firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true);

  function signup(email, password, name) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: name });
        const userData = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: name,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setCurrentUser(userData);
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const userData = {
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setCurrentUser(userData);
      }
    );
  }

  function logout() {
    return signOut(auth).then(() => {
      localStorage.removeItem("user");
      setCurrentUser(null);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        setCurrentUser(userData);
      } else {
        localStorage.removeItem("user");
        setCurrentUser(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, signup, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
