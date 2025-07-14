import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Input from "../Input";
import Button from "../Button";
import { auth } from "../../firebase/firebase";
import Checkbox from "../Checkbox";
import { useAuth } from "../../context/AuthProvider";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
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
    if (e.target.value.includes("@")) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      navigate("/user/dashboard");
      setMessage('correct password and email');
      console.log("sucessfully logged in");
    } catch (error) {
      console.log(error.message);
      setMessage(`either wrong password or email | check your network connection | the account isnt registered `);
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} autoCompletete="on">
        <Input
          placeholder="example@gmail.com"
          type="email"
          id="email"
          label={"Email"}
          value={email}
          onChange={validateEmail}
          check={
            emailCheck && <i className="fa-solid fa-check text-green-400"></i>
          }
        />
        <Input
          placeholder="************"
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
        <Button label="Login to Dashboard" type={"submit"} />
        <p>{message}</p>
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
  );
}
