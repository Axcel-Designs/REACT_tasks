import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { socialLinks } from "../data/socialLinks";
import Register from "../components/RegisterLogin/Register";
import Login from "../components/RegisterLogin/Login";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from "../context/AuthProvider";

export default function RegisterLogin() {
  const [message, setMessage] = useState("");
  const { setIsLoggedIn, activeView, setActiveView } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const hideRender =
    location.pathname.startsWith("/") && location.pathname !== "/";

  const handleRegtr = () => {
    setActiveView("register");
  };
  const handleLogin = () => {
    setActiveView("login");
  };

  async function handleSocialLogin(e) {
    e.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      navigate("/user/dashboard");
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
        <main className="flex justify-around items-center w-full h-svh">
          <section className="shadow-xl/30 p-6 rounded-lg w-7/8 md:w-4/5 min-h-[400px] h-fit lg:w-2/5 bg-white">
            <div className="flex flex-row justify-between items-center text-lg">
              <nav className="flex gap-4">
                <button
                  onClick={handleRegtr}
                  className={`${
                    activeView === "register"
                      ? "font-semibold border-2 border-transparent border-b-red-800 pb-4"
                      : "border-2 border-transparent pb-4"
                  }`}
                >
                  <Link>Register</Link>
                </button>
                <button
                  onClick={handleLogin}
                  className={`${
                    activeView === "login"
                      ? "font-semibold border-b-2 border-red-800 pb-4"
                      : "border-2 border-transparent pb-4"
                  }`}
                >
                  <Link>Login</Link>
                </button>
              </nav>
              <button
                className="font-semibold cursor-pointer"
                onClick={signOut}
              >
                {" "}
                X{" "}
              </button>
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
              <div>
                {activeView === "register" && (
                  <Register onSucess={handleLogin} />
                )}
              </div>
              <div>{activeView === "login" && <Login />}</div>
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
