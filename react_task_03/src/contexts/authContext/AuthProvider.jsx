import { useContext } from "react";
import React,{ useState, createContext, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth(){
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggIn, setUserLoggIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, initializeUser);
    return unsubcribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser(...user);
      setUserLoggIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggIn(false);
    }
    setLoading(false);
  }
  const value = {
    currentUser,
    userLoggIn,
    loading,
  };
  return (
    <AuthProvider.Provider value={value}>
      {!loading && children}
    </AuthProvider.Provider>
  );
}
