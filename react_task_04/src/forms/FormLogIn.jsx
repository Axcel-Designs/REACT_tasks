import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { InputForm } from "../components/Input";
import Button, { ButtonTrnparnt } from "../components/Button";

export default function FormLogIn() {
  const navigate = useNavigate();

  function forgetPassword() {}
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
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
          <div className="flex justify-between items-center gap-2 ">
            <Button type="submit" label="Log In" width={"w-1/3"} />
            <div className="w-fit text-red-400 gap-2 cursor-pointer" onClick={forgetPassword}>
              <p>
                Forget Password?
                </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
