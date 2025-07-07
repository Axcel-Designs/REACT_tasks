import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import Checkbox from "../components/Checkbox";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const location = useLocation();
  const hideAuth =
    location.pathname.startsWith("/register") &&
    location.pathname !== "/register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailCheck, setEmailCheck] = useState(false);
  const [psswrdCheck, setPasswordCheck] = useState(false);

  const [psswrdVisible, setpsswrdVisible] = useState(false);
  function showPassword() {
    setpsswrdVisible(!psswrdVisible);
  }

  function validatePassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  }
  function validateEmail(e) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(e.target.value);
    if (re.test(e.target.value)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {!hideAuth ? (
        <>
          <form action="" onSubmit={handleSubmit} autoCompletete="on">
            <Input
              placeholder="email"
              type="email"
              id="email"
              label={"Email"}
              value={email}
              check={
                emailCheck && (
                  <i className="fa-solid fa-check text-green-400"></i>
                )
              }
              onChange={validateEmail}
              onKeyUp={(e) => {
                if (e.target.value.includes("@")) {
                  setEmailCheck(true);
                } else {
                  setEmailCheck(false);
                }
              }}
            />
            <Input
              placeholder="Password"
              type={psswrdVisible ? "text" : "password"}
              id="password"
              label={"Password"}
              value={password}
              onChange={validatePassword}
              check={
                psswrdCheck && (
                  <i className="fa-solid fa-check text-green-400"></i>
                )
              }
              show={
                <i
                  className={`fa-regular fa-eye${
                    psswrdVisible ? "-slash" : ""
                  } cursor-pointer`}
                ></i>
              }
              showEye={showPassword}
            />
            <p>8+ characters</p>

            {/* <Link to={"register/personalinfo"}> */}
            <Button label="Create Account" type={"submit"} />
            {/* </Link> */}
            <Checkbox label={" Send me news and promotions"} />
          </form>
          <div className="p-4">
            <p className="text-center">
              By continuing I aggree with{" "}
              <a href="http://">
                <span className="underline text-blue-500">
                  Terms & Conditions Privacy Policy
                </span>
              </a>
            </p>
          </div>
          <Outlet />
        </>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}
