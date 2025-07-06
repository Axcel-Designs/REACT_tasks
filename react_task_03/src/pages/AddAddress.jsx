import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function AddAdress() {
  return (
    <>
      <section className="shadow p-6 rounded-lg w-7/8 md:w-4/5 min-h-[400px] h-fit lg:w-2/5">
        <div className="flex flex-row justify-between items-center text-lg font-semibold">
          <div>
            <h1 className="">Add Address</h1>
          </div>
          <Link to="/">
            <div>X</div>
          </Link>
        </div>
        <div className="my-4">
          <form action="" className="text-gray-600" autoComplete="">
            <Input placeholder="address" type={"text"} />
            <div className="text-sm my-4 ">
              <p>Your address is not visible to other users</p>
            </div>
            <br className="my-6"/>
            <div className="flex flex-row gap-4 my-6">
              <a href="http://">
                <div className="border-2 p-2 rounded-2xl border-orange-200">
                  <i class="fa-solid fa-location-dot"></i> Use current location
                </div>
              </a>
              <Link to="/register/completeaddress">
                <div className="border-2 p-2 rounded-2xl border-orange-200">
                  Add Manually
                </div>
              </Link>
            </div>
            <section>
              <div>
                <h1 className="font-semibold text-lg">
                  Sharing your address shows
                </h1>
              </div>
              <div className="flex flex-col gap-4 my-4">
                <div className="flex flex-row gap-4 items-center">
                  <i class="fa-solid fa-users"></i>
                  <p>People near you</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <i class="fa-regular fa-clock"></i>
                  <p>Estimated delivery time</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <i class="fa-solid fa-dollar-sign"></i>
                  <p>Estimate shippin costs</p>
                </div>
              </div>
            </section>
            <Outlet />
          </form>
        </div>
      </section>
    </>
  );
}
