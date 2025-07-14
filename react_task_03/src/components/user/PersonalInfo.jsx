import { Link, Outlet } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { countryCode } from "../../data/countryCodes";

export default function PersonalInfo({ gotoPage }) {
  
  return (
    <>
      <section>
        <div className="flex flex-row justify-between items-center text-lg font-semibold text-black">
          <div>
            <h1>Personal Information</h1>
          </div>
          <Link to="/">
            <div>X</div>
          </Link>
        </div>
        {/* <form action="" className="text-gray-600" autoComplete=""> */}
        <Input placeholder="Full name" type={"text"} />
        <div className="flex flex-row gap-2 items-center text-gray-600 my-2">
          <p>Gender: </p>
          <div className="flex flex-row gap-2">
            <input type="radio" value="male" name="gender" />
            <label htmlFor="male">Male</label>
            <input type="radio" value="female" name="gender" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="text-sm my-4 flex items-center">
          <span className="border-2 rounded-[50%] w-4 h-4 mr-1 flex justify-center items-center">
            &#8505;{" "}
          </span>
          <p>The phone number and birthday are only visible to you</p>
        </div>

        <div>
          <div className="flex flex-row gap-2 items-center">
            <select
              name="country"
              id=""
              className="w-1/5 border-2 rounded-2xl border-gray-200 p-2"
            >
              {countryCode.map(({ country, code }) => (
                <option key={country} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <Input
              placeholder={"Phone number"}
              width={"w-4/5"}
              name="phoneNumber"
              type={"tel"}
            />
          </div>
        </div>
        <Input placeholder="Birthday" type={"date"} show={"optional"} />
        <p className="mb-6">Let's know your birthday so as no to miss a gift</p>
        <Button
          label={"Save Information"}
          link={() => gotoPage("addAddress")}
        />
        <Outlet />
        {/* </form> */}
      </section>
    </>
  );
}
