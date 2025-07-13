import { Link, Outlet } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";

export default function AddAdressFill() {
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
          type={"text"}
          label={"Street address"}
        />
        <Input
          placeholder="Appartment"
          name="appartment"
          type={"text"}
          label={"apartment"}
        />
        <Input placeholder="city" name="city" type={"text"} label={"city"} />
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
              type="number"
            />
          </div>
        </div>
        <br className="my-4" />
          <Button label="Save Information" type="submit" />
        <Outlet />
      </section>
    </>
  );
}
