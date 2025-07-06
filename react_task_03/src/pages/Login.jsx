import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

export default function Login() {
  const location = useLocation();
  const hideAuth =
    location.pathname.startsWith("/login") && 
    location.pathname !== "/login";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [emailCheck, setemailCheck] = useState(false);
  const [psswrdCheck, setPasswordCheck] = useState(false);

  const [psswrdVisible, setpsswrdVisible] = useState(false);
  function showPassword() {
    setpsswrdVisible(!psswrdVisible);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
            <Link to="/login/dashboard">
              <Button label="Login to Dashboard" type={"submit"}  />
            </Link>
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
