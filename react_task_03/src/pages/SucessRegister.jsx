import { Link } from "react-router-dom";
import Button from "../components/Button";
import img from "../assets/Saly-10.svg";

export default function SuccessRegister() {
  return (
    <>
      <main className="flex justify-center items-center h-screen bg-white">
        <section className="shadow  rounded-lg w-3/5 ">
          <img src={img} alt="" className="bg-red-50 w-full" />
          <div className="p-4">
            <h1 className="flex flex-wrap text-4xl font-extrabold text-gray-900 my-4">
              You Have Successully Registered!
            </h1>
            <Link to="/">
              <Button label={"Go to Login"} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
