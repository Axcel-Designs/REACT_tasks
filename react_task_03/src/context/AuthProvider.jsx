import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [activeView, setActiveView] = useState("register");

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [cntryCd, setCntryCd] = useState("");
  const [telphone, setTelphone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [stAddress, setStAddress] = useState("");
  const [aprtmnt, setAprtmnt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCde, setZipCde] = useState("");

  const value = {
    isLoggedIn, setIsLoggedIn,
    activeView, setActiveView,
    fullName, setFullName,
    gender, setGender,
    cntryCd, setCntryCd,
    telphone, setTelphone,
    birthday, setBirthday,
    address, setAddress,
    stAddress, setStAddress,
    aprtmnt, setAprtmnt,
    city, setCity,
    state, setState,
    zipCde, setZipCde,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
