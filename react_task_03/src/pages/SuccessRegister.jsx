import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
// import img from "../../public/Saly10.svg";
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
      {/* <main className=" w-full flex justify-around items-center h-svh"> */}
        {/* <section className="rounded-2xl w-3/5 min-h-[400px] lg:w-2/5  bg-white text-gray-700 shadow-lg/30"> */}
        <section>
          <div className="bg-[url('../../public/Saly10.svg')] bg-cover bg-center h-[300px] w-full bg-red-50 rounded-t-2xl">
            <div className="flex flex-row justify-end items-center text-lg font-semibold p-6">
            
              <Link to="/">
                <div>X</div>
              </Link>
            </div>
            {/* <img
              src={img}
              alt="image"
              className="bg-red-50 w-full rounded-t-2xl"
            /> */}
          </div>
          <div className="p-4 ">
            <h1 className="flex flex-wrap text-2xl lg:text-3xl font-extrabold text-gray-900 my-4">
              You Have Successully Registered!
            </h1>
            <Button label={"Go to Login"} link={handleLogin} />
          </div>
        </section>
      {/* </main> */}
    </>
  );
}
