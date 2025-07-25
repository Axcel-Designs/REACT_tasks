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
        <section>
          <div className="bg-[url('../../public/Saly10.svg')] bg-cover bg-center h-[300px] w-full bg-red-50 rounded-t-2xl">
            <div className="flex flex-row justify-end items-center text-lg font-semibold p-6">
            
              <Link to="/">
                <div>X</div>
              </Link>
            </div>
           
          </div>
          <div className="p-4 ">
            <h1 className="flex flex-wrap text-2xl lg:text-3xl font-extrabold text-gray-900 my-4">
              You Have Successully Registered!
            </h1>
            <Button label={"Go to Login"} link={handleLogin} />
          </div>
        </section>
    </>
  );
}
