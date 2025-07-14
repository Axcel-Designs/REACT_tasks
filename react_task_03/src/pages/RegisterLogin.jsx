import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";
import Register from "../components/RegisterLogin/Register";
import Login from "../components/RegisterLogin/Login";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export default function RegisterLogin() {
  const [regLog, setRegLog] = useState({
    to: <Register />,
    label: "register",
  });
  const [fontStyle, setFontStyle] = useState("");
  const [logfontStyle, setLogFontStyle] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const hideRender =
    location.pathname.startsWith("/user") && location.pathname !== "/user";

  const handleRegtr = () => {
    setRegLog({ to: <Register />, label: "register" });
    setFontStyle(
      "font-semibold border-2 border-transparent border-b-red-800 pb-4"
    );
    setLogFontStyle("border-2 border-transparent");
  };
  const handleLogin = () => {
    setRegLog({ to: <Login />, label: "login" });
    setLogFontStyle(
      "font-semibold border-2 border-transparent border-b-red-800 pb-4"
    );
    setFontStyle("border-2 border-transparent");
  };

  async function handleSocialLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setMessage("User signed in successfully");
      console.log("User signed in:");
      return result;
      // const user = result.user;
    } catch (error) {
      console.error("Error signing in:", error);
      setMessage("Error signing in");
    }
  }
  // useEffect(() => {
  async function signOut() {
    try {
      await auth.signOut();
      setMessage("User signed out successfully");
      navigate("/");
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
      setMessage("Error signing out");
    }
  }

  return (
    <>
      {!hideRender ? (
        <main className="bg-amber-50 w-full static h-svh flex justify-around items-center">
          <section className="shadow p-6 rounded-lg min-w-fit w-7/8 md:w-4/5 min-h-[400px] lg:w-2/5 bg-white text-gray-700 ">
            <div className="flex flex-row justify-between items-center text-lg">
              <nav className="flex gap-4">
                <div onClick={handleRegtr} className={`${fontStyle}`}>
                  <Link>Register</Link>
                </div>
                <div onClick={handleLogin} className={`${logfontStyle}`}>
                  <Link>Login</Link>
                </div>
              </nav>

              <div className="font-semibold cursor-pointer" onClick={signOut}>
                X
              </div>
            </div>
            <div className="flex flex-row gap-4 my-4">
              {socialLinks.map((social, i) => (
                <div
                  key={i}
                  className="bg-gray-200 p-2 rounded-full text-xl h-10 w-10 flex justify-around items-center"
                  onClick={social.name === "google" ? handleSocialLogin : null}
                >
                  <a target="_blank" rel="noopener noreferrer">
                    <li
                      className={`${social.class} ${social.color} cursor-pointer`}
                    ></li>
                  </a>
                  <Outlet />
                </div>
              ))}
            </div>
            <section className="text-gray-500 min-w-fit">
              <p className="my-2">or {regLog.label} with email</p>
              <div>{regLog.to}</div>
            </section>
            {message && (
              <div className="text-red-500">
                <p>{message}</p>
              </div>
            )}
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
