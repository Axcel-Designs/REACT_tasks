import { Link, Outlet } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";

export default function AddAddressFill({ formik }) {
  return (
    <>
      <section>
        <form onSubmit={formik.handleSubmit}>
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.street}
            error={formik.errors.street ? formik.errors.street : null}
          />
          <Input
            placeholder="Apartment"
            name="apartment"
            type="text"
            label="Apartment"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.apartment}
            error={formik.errors.apartment ? formik.errors.apartment : null}
          />
          <Input
            placeholder="City"
            name="city"
            type="text"
            label="city"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.errors.city ? formik.errors.city : null}
          />
          <div>
            <div className="flex flex-row items-center justify-between">
              <Input
                placeholder={"State"}
                label={"State"}
                name="state"
                type={"text"}
                width={"w-2/5"}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.state}
                error={formik.errors.state ? formik.errors.state : null}
              />
              <Input
                placeholder={"Zip code"}
                label={"Zip code"}
                width={"w-2/5"}
                type="text"
                name="zipCde"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.zipCde}
                error={formik.errors.zipCde ? formik.errors.zipCde : null}
              />
            </div>
          </div>
          <br className="my-4" />
          <Button label="Save Information" type="submit" />
        </form>
      </section>
    </>
  );
}
