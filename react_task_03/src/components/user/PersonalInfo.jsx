import { Link } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { countryCode } from "../../data/countryCodes";
// import { useAuth } from "../../context/AuthProvider";
// import { useFormik } from "formik";
// import userFormSchema from "../../utils/userFormSchema";

export default function PersonalInfo({ formik }) {
  return (
    <>
      <section>
        <form
          onSubmit={formik.handleSubmit}
          className="text-gray-600"
          autoComplete="on"
        >
          {/* Header */}
          <div className="flex flex-row justify-between items-center text-lg font-semibold text-black mb-4">
            <h1>Personal Information</h1>
            <Link to="/">
              <div>X</div>
            </Link>
          </div>
          {/* Full Name */}
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
          {/* Gender */}
          <div className="flex flex-row gap-2 items-center text-gray-600 my-2">
            <p>Gender:</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formik.values.gender === "male"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                Female
              </label>
            </div>
          </div>
          {formik.touched.gender && formik.errors.gender && (
            <p className="text-sm text-red-500">{formik.errors.gender}</p>
          )}
          {/* Info note */}
          <div className="text-sm my-4 flex items-center">
            <span className="border-2 rounded-full w-4 h-4 mr-1 flex justify-center items-center">
              &#8505;
            </span>
            <p>The phone number and birthday are only visible to you</p>
          </div>
          {/* Phone Number */}
          <div className="flex flex-row gap-2 items-center mb-4">
            <select
              name="cntryCd"
              className="w-1/5 border-2 rounded-2xl border-gray-200 p-2"
              value={formik.values.cntryCd}
              onChange={(e) => formik.setFieldValue("cntryCd", e.target.value)}
              onBlur={formik.handleBlur}
            >
              {countryCode.map(({ country, code }) => (
                <option key={`${country}-${code}`} value={`+${code}`}>
                  +{code}
                </option>
              ))}
              {formik.touched.cntryCd && formik.errors.cntryCd && (
                <p className="text-sm text-red-500">{formik.errors.cntryCd}</p>
              )}
            </select>
            <Input
              placeholder="Phone number"
              width="w-4/5"
              name="telphone"
              type="tel"
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
          {/* Birthday */}
          <Input
            placeholder="Birthday"
            name="birthday"
            type="date"
            show="optional"
            value={formik.values.birthday || ""}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={
              formik.touched.birthday && formik.errors.birthday
                ? formik.errors.birthday
                : null
            }
          />
          <p className="mb-6 text-sm text-gray-500">
            Let's know your birthday so as not to miss a gift.
          </p>
          <Button
            label="Save Information"
            type="submit"
            link={formik.handleSubmit}
          />
        </form>
      </section>
    </>
  );
}
