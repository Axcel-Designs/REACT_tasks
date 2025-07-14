import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import img from "../assets/Saly-10.svg";
import { useAuth } from "../context/AuthProvider";

export default function SuccessRegister() {
  const { setActiveView } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    setActiveView("login");
    navigate("/");
  }
  return (
    <>
      <main className=" w-full h-svh flex justify-around items-center">
        <section className="rounded-2xl w-3/5 min-h-[400px] lg:w-2/5  bg-white text-gray-700 shadow-lg/30">
          <div>
            <img src={img} alt="" className="bg-red-50 w-full rounded-t-2xl" />
          </div>
          <div className="p-4 ">
            <h1 className="flex flex-wrap text-2xl lg:text-3xl font-extrabold text-gray-900 my-4">
              You Have Successully Registered!
            </h1>
            <Button label={"Go to Login"} link={handleLogin} />
          </div>
        </section>
      </main>
    </>
  );
}
