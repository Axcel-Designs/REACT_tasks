import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function AddAdressFill() {
  return (
    <>
      <section className="shadow p-6 rounded-lg w-7/8 md:w-4/5 min-h-[400px] h-fit lg:w-2/5 bg-white">
        <div className="flex flex-row justify-between items-center text-lg font-semibold">
          <div>
            <h1 className="">Add address</h1>
          </div>
          <Link to="/">
            <div>X</div>
          </Link>
        </div>
        <div className="my-4">
          <form action="" className="text-gray-600" autoComplete="">
            <Input
              placeholder="Street address"
              name="street"
              type={"text"}
              label={"Street address"}
            />
            <Input
              placeholder="Appartment"
              name="appartment"
              type={"text"}
              label={"apartment"}
            />
            <Input
              placeholder="city"
              name="city"
              type={"text"}
              label={"city"}
            />
            <div>
              <div className="flex flex-row items-center justify-between">
                <Input
                  placeholder={"State"}
                  label={"State"}
                  name="state"
                  type={"text"}
                  width={"w-2/5"}
                />
                <Input
                  placeholder={"Zip code"}
                  label={"Zip code"}
                  width={"w-2/5"}
                  name="zip"
                  type={"text"}
                />
              </div>
            </div>
            <br className="my-4" />
            <Link to="/register/successfulregistration">
              <Button label={"Save Information"} link={""} />
            </Link>
            <Outlet />
          </form>
        </div>
      </section>
    </>
  );
}
