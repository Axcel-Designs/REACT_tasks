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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [errors, setErrors] = useState({});

  function validationSchema() {
    const newErr = {};
    if (!formData.name.trim()) {
      newErr.name = "Name required";
    }
    if (!formData.email.trim()) {
      newErr.email = "Email required";
    }else if(!formData.email.includes('@')) {
      newErr.email = 'Invalid Email'
    }

    if (!formData.password.trim()) {
      newErr.password = "Password required";
    }

    setErrors(newErr);
    return Object.keys(errors).length == 0;
  }

  function visible() {
    setShow(!show);
  }

  function handleForm(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
  }

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
    if (!validationSchema()) return;
    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    )
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
            value={formData.name}
            onChange={handleForm}
            error={errors.name}
          />
          <InputForm
            plhldr={"Email or Phone Number"}
            type={"email"}
            name="email"
            value={formData.email}
            onChange={handleForm}
            error={errors.email}
          />
          <InputForm
            plhldr={"Password"}
            type={show ? "text" : "password"}
            name="password"
            clickCheck={visible}
            check={
              <i className={`fa-regular fa-eye${show ? "-slash" : ""}`}></i>
            }
            value={formData.password}
            onChange={handleForm}
            error={errors.password}
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
        <p className="text-sm text-red-400 mt-4">{errMessage}</p>
      </div>
    </>
  );
}
