import React from "react";
import { InputForm } from "../components/Input";
import Button, { ButtonTrnparnt } from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import ggl from "../assets/Icon-Google.svg";

export default function FormSignUp() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      navigate("/login");
    } catch (error) {
      console.log("error", error);
    }
  }

  function googleSignIn() {}
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
            id="name"
            // value=""
            // onchange=""
          />
          <InputForm
            plhldr={"Email or Phone Number"}
            type={"email"}
            id="name"
            // value=""
            // onchange=""
          />
          <InputForm
            plhldr={"Password"}
            type={"password"}
            id="name"
            // value=""
            // onchange=""
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
      </div>
    </>
  );
}
