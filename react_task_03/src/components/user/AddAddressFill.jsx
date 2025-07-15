import { Link, Outlet } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { useAuth } from "../../context/AuthProvider";

export default function AddAddressFill() {
  const {
    stAddress,
    setStAddress,
    aprtmnt,
    setAprtmnt,
    city,
    setCity,
    state,
    setState,
    zipCde,
    setZipCde,
  } = useAuth();
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
          value={stAddress}
          onChange={(e) => setStAddress(e.target.value)}
        />
        <Input
          placeholder="Apartment"
          name="apartment"
          type={"text"}
          label={"apartment"}
          value={aprtmnt}
          onChange={(e) => setAprtmnt(e.target.value)}
        />
        <Input placeholder="city" name="city" type={"text"} label={"city"} value={city} onChange={(e) => setCity(e.target.value)} />
        <div>
          <div className="flex flex-row items-center justify-between">
            <Input
              placeholder={"State"}
              label={"State"}
              name="state"
              type={"text"}
              width={"w-2/5"}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <Input
              placeholder={"Zip code"}
              label={"Zip code"}
              width={"w-2/5"}
              name="zip"
              type="number"
              value={zipCde}
              onChange={(e) => setZipCde(e.target.value)}
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
