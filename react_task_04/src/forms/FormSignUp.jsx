import React from "react";
import { InputForm } from "../components/Input";
import Button, { ButtonTrnparnt } from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import ggl from "../assets/Icon-Google.svg";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

export default function FormSignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);    
  } else {
    // ...
  }
});

  async function handleSubmit(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrMessage(errorCode, errorMessage);
      });
  }

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        navigate("/");
        const user = result.user;
        console.log(token);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorCode, errorMessage);
      });
  }
  return (
    <>
      <div className="min-w-fit p-10 w-5/7">
        <div>
          <h1 className="text-2xl">Create an account</h1>
          <p className="text-sm">Enter your details below</p>
        </div>
        <br />
        <form onSubmit={handleSubmit} autoComplete="on">
          <InputForm
            plhldr={"Name"}
            type={"text"}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button type="submit" label="Create Account" width={"w-full"} />
        </form>
        <div>
          <ButtonTrnparnt
            label="Sign with Google "
            click={googleSignIn}
            src={ggl}
          />
        </div>
        <div className="text-center text-sm text-gray-400 flex gap-2">
          <p>Already have account?</p>{" "}
          <NavLink to="/login" className="underline font-semibold">
            Log In
          </NavLink>
        </div>
        <p>{errMessage}</p>
      </div>
    </>
  );
}
