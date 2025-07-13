import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [psswrdCheck, setPasswordCheck] = useState(false);
  const [psswrdVisible, setpsswrdVisible] = useState(false);
  function showPassword() {
    setpsswrdVisible(!psswrdVisible);
  }

  function validatePassword(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length >= 8) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  }
  function validateEmail(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(newEmail)) {
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
      console.log("Successfully registered:", user);
      setMessage("Successfully registered");
      navigate("/user/successfulregistration");
    } catch (error) {
      console.log(error.message);
      setMessage(error.message)
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoCompletete="on">
        <Input
          placeholder="email"
          type="email"
          id="email"
          label={"Email"}
          value={email}
          check={
            emailCheck && <i className="fa-solid fa-check text-green-400"></i>
          }
          onChange={validateEmail}
        />
        <Input
          placeholder="Password"
          type={psswrdVisible ? "text" : "password"}
          id="password"
          label={"Password"}
          value={password}
          onChange={validatePassword}
          check={
            psswrdCheck && <i className="fa-solid fa-check text-green-400"></i>
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

        <Button label="Create Account" type={"submit"} />
        <p>{message}</p>
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
  );
}
