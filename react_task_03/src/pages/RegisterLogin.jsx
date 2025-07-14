import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";
import Register from "../components/RegisterLogin/Register";
import Login from "../components/RegisterLogin/Login";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";

export default function RegisterLogin() {
  const [regLog, setRegLog] = useState(<Register />);
  const [message, setMessage] = useState("");
  const [activeView, setActiveView] = useState("register");

  const navigate = useNavigate();
  const location = useLocation();
  const hideRender =
    location.pathname.startsWith("/user") && location.pathname !== "/user";

  const handleRegtr = () => {
    setRegLog(<Register />);
    setActiveView("register");
  };
  const handleLogin = () => {
    setRegLog(<Login />);
    setActiveView("login");
  };

  async function handleSocialLogin(e) {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setMessage("User signed in successfully");
      console.log("User signed in:");
      return result;
    } catch (error) {
      console.error("Error signing in:", error);
      setMessage("Error signing in");
    }
  }

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

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
                <div
                  onClick={handleRegtr}
                  className={`${
                    activeView === "register"
                      ? "font-semibold border-2 border-transparent border-b-red-800 pb-4"
                      : "border-2 border-transparent"
                  }`}
                >
                  <Link>Register</Link>
                </div>
                <div
                  onClick={handleLogin}
                  className={`${
                    activeView === "login"
                      ? "font-semibold border-b-2 border-red-800 pb-4"
                      : "border-2 border-transparent"
                  }`}
                >
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
              <p className="my-2">or {activeView} with email</p>
              <div>{regLog}</div>
            </section>
            <div className="text-red-500">
              <p>{message}</p>
            </div>
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
