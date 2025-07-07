import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { socialLinks } from "../data/SocialLinks";
import Register from "./Register";
import Login from "./Login";

export default function RegisterLogin() {
  const [regLog, setRegLog] = useState({ to: <Register />, label: "register" });
  const [fontStyle, setFontStyle] = useState("");
  const [logfontStyle, setLogFontStyle] = useState("");

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

  return (
    <>
      <main className="home">
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
            <Link to="/">
              <div className="font-semibold ">X</div>
            </Link>
          </div>
          <div className="flex flex-row gap-4 my-4">
            {socialLinks.map((social, i) => (
              <div
                key={i}
                className="bg-gray-200 p-2 rounded-full text-xl h-10 w-10 flex justify-around items-center" onClick={social.url}
              >
                <a  target="_blank" rel="noopener noreferrer">
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
        </section>
      </main>
    </>
  );
}
