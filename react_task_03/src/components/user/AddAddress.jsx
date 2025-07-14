import { Link, Outlet } from "react-router-dom";
import Input from "../Input";
import { useAuth } from "../../context/AuthProvider";

export default function AddAddress({ gotoPage }) {
  const { address, setAddress } = useAuth();
  return (
    <>
      <section>
        <div className="flex flex-row justify-between items-center text-lg font-semibold">
          <div>
            <h1 className="">Add Address</h1>
          </div>
          <Link to="/">
            <div>X</div>
          </Link>
        </div>
        <Input placeholder="address" type={"text"} value={address} onChange={(e) => setAddress(e.target.value)}/>
        <div className="text-sm my-4 ">
          <p>Your address is not visible to other users</p>
        </div>
        <br className="my-6" />
        <div className="flex flex-row gap-4 my-6">
          <a href="http://">
            <div className="border-2 p-2 rounded-2xl border-orange-200 text-[#5932EA] font-semibold">
              <i class="fa-solid fa-location-dot"></i> Use current location
            </div>
          </a>
          <div
            className="border-2 p-2 rounded-2xl border-orange-200 cursor-pointer text-[#5932EA] font-semibold"
            onClick={() => gotoPage("addAddressFill")}
          >
            Add Manually
          </div>
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
              <p>Estimate shipping costs</p>
            </div>
          </div>
        </section>
        <Outlet />
      </section>
    </>
  );
}
