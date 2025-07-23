import React from "react";
import Input from "../components/Input";
import Button, { ButtonTrnparnt } from "../components/Button";
import { useNavigate } from "react-router-dom";
import ggl from '../assets/Icon-Google.svg'

export default function FormSignUp() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/login");
  }

  function googleSignIn(){

  }
  return (
    <>
      <div className="min-w-fit p-10 bg-amber-300">
        <div>
          <h1 className="text-2xl">Create an account</h1>
          <p className="text-sm">Enter your details below</p>
        </div>
        <form onSubmit={handleSubmit} autoComplete="on">
          <Input plhldr={"Name"} type={"text"} id="name" value='' onchange=''/>
          <Input plhldr={"Email or Phone Number"} type={"email"} id="name" value='' onchange=''/>
          <Input plhldr={"Password"} type={"password"} id="name" value='' onchange=''/>
          <Button type="submit" label="Create Account" />
        </form>
        <div>
          <ButtonTrnparnt
            label="Sign with Google "
            click={googleSignIn}
            src={ggl}
          />
        </div>
      </div>
    </>
  );
}
