import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import img from "../assets/Saly-10.svg";
import { useAuth } from "../context/AuthProvider";

export default function SuccessRegister() {
  const { setActiveView } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    setActiveView("login");
    navigate('/')
  }
  return (
    <>
      <section className="rounded-lg ">
        <img src={img} alt="" className="bg-red-50 w-full" />
        <div className="p-4">
          <h1 className="flex flex-wrap text-4xl font-extrabold text-gray-900 my-4">
            You Have Successully Registered!
          </h1>
          <Button label={"Go to Login"} link={handleLogin} />
        </div>
      </section>
    </>
  );
}
