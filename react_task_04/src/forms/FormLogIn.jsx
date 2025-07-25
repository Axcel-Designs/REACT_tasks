import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputForm } from "../components/Input";
import Button, { ButtonTrnparnt } from "../components/Button";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import {  useDispatch } from "react-redux";
import { logIn } from "../redux/authSlice";


export default function FormLogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 const dispatch = useDispatch();

  async function forgetPassword(e) {
    e.preventDefault();
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage(" Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setMessage(`${error.message}`);
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(logIn());
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <>
      <div className="min-w-fit p-10 w-5/7">
        <div>
          <h1 className="text-2xl">Log in to Exclusive</h1>
          <p className="text-sm">Enter your details below</p>
        </div>
        <br />
        <form onSubmit={handleSubmit} autoComplete="on">
          <InputForm
            plhldr={"Email or Phone Number"}
            type={"email"}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            plhldr={"Password"}
            type={"password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-between items-center gap-2 ">
            <Button type="submit" label="Log In" width={"w-1/3"} />
            <div
              className="w-fit text-red-400 gap-2 cursor-pointer"
              onClick={forgetPassword}
            >
              <p>Forget Password?</p>
            </div>
          </div>
        </form>
        <p>{message}</p>
      </div>
    </>
  );
}
