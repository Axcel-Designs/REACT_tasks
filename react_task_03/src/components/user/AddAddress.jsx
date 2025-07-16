import { Link} from "react-router-dom";
import Input from "../Input";
// import { useNavigate } from "react-router-dom";

export default function AddAddress({ gotoPage, formik }) {
// const navigate = useNavigate();

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
        <Input
          placeholder="address"
          type="text"
          name="address"
          value={formik.values.address}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.address && formik.errors.address}
        />
        <div className="text-sm my-4 ">
          <p>Your address is not visible to other users</p>
        </div>
        <br className="my-6" />
        <div className="flex flex-row gap-4 my-6 max-sm:flex-col">
          <a href="http://">
            <div className="border-2 p-2 rounded-2xl border-orange-200 text-[#5932EA] font-semibold">
              <i className="fa-solid fa-location-dot"></i> Use current location
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
              <i className="fa-solid fa-users"></i>
              <p>People near you</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <i className="fa-regular fa-clock"></i>
              <p>Estimated delivery time</p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <i className="fa-solid fa-dollar-sign"></i>
              <p>Estimate shipping costs</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
