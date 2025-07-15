import { Link, Outlet } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { countryCode } from "../../data/countryCodes";
import { useAuth } from "../../context/AuthProvider";

export default function PersonalInfo({ gotoPage, formik }) {
  const { cntryCd, setCntryCd } = useAuth();

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
        <Input
          placeholder="Full name"
          name="fullName"
          type="text"
          value={formik.values.fullName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : null
          }
        />
        <div className="flex flex-row gap-2 items-center text-gray-600 my-2">
          <p>Gender: </p>
          <div className="flex flex-row gap-2">
            <input
              type="radio"
              value={formik.values.gender}
              name="gender"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              value={formik.values.gender}
              name="gender"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
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
              value={cntryCd}
              onChange={(e) => setCntryCd(e.target.value)}
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
              name="telphone"
              type={"tel"}
              value={formik.values.telphone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.telphone && formik.errors.telphone
                  ? formik.errors.telphone
                  : null
              }
            />
          </div>
        </div>
        <Input
          placeholder="Birthday"
          name={"birthday"}
          type="date"
          show={"optional"}
          value={formik.valuesbirthday}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.birthday && formik.errors.birthday
              ? formik.errors.birthday
              : null
          }
        />
        <p className="mb-6">Let's know your birthday so as no to miss a gift</p>
        <Button
          label={"Save Information"}
          link={() => gotoPage("addAddress")}
        />
      </section>
    </>
  );
}
