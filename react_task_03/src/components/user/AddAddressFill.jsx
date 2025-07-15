import { Link, Outlet } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";

export default function AddAddressFill({ formik }) {
  return (
    <>
      <section>
        <div className="flex flex-row justify-between items-center text-lg font-semibold">
          <div>
            <h1 className="">Add address</h1>
          </div>
          <Link to="/">
            <div>X</div>
          </Link>
        </div>
        <Input
          placeholder="Street address"
          name="street"
          type="text"
          label="Street address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.street}
          error={
            formik.touched.street && formik.errors.street
              ? formik.errors.street
              : null
          }
        />
        <Input
          placeholder="Apartment"
          name="apartment"
          type="text"
          label="Apartment"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.apartment}
          error={
            formik.touched.apartment && formik.errors.apartment
              ? formik.errors.apartment
              : null
          }
        />
        <Input
          placeholder="City"
          name="city"
          type="text"
          label="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          error={
            formik.touched.city && formik.errors.city
              ? formik.errors.city
              : null
          }
        />
        <div>
          <div className="flex flex-row items-center justify-between">
            <Input
              placeholder={"State"}
              label={"State"}
              name="state"
              type={"text"}
              width={"w-2/5"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              error={
                formik.touched.city && formik.errors.city
                  ? formik.errors.city
                  : null
              }
            />
            <Input
              placeholder={"Zip code"}
              label={"Zip code"}
              width={"w-2/5"}
              type="text"
              name="zipCde"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCde}
              error={
                formik.touched.zipCde && formik.errors.zipCde
                  ? formik.errors.zipCde
                  : null
              }
            />
          </div>
        </div>
        <br className="my-4" />
        <Button label="Save Information" type="submit" />
      </section>
    </>
  );
}
