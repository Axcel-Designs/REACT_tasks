import {  Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const hideAuth =
    location.pathname.startsWith("/login") && 
    location.pathname !== "/login";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
    setEmail(e.target.value);
    if (email.includes("@")) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/login/dashboard");
      console.log('sucessfully logged in');
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
              onChange={validateEmail}
              check={
                emailCheck && (
                  <i className="fa-solid fa-check text-green-400"></i>
                )
              }
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
                  className={`fa-regular ${
                    psswrdVisible ? "fa-eye-slash" : "fa-eye"
                  } cursor-pointer`}
                ></i>
              }
              showEye={showPassword}
            />
            <p>8+ characters</p>
            {/* <Link to="/login/dashboard"> */}
              <Button label="Login to Dashboard" type={"submit"} />
            {/* </Link> */}
            <Checkbox label={"Remember Me"} />
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
