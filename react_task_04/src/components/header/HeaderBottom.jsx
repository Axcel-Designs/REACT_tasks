import React, { useState } from "react";
import Input from "../../components/Input";
import Nav from "./Nav";
import { NavLink, useLocation } from "react-router-dom";

export default function HeaderBottom() {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <section className="w-full border-b-2 border-gray-200 py-4">
      <div className="md:w-9/10 lg:w-5/6 flex m-auto justify-between gap-2 bg-red-400 items-center">
        <div className="w-1/5 ml-2">
          <h1 className="font-bold text-lg max-sm:hidden">Exclusive</h1>
        </div>
        <div className="flex justify-between bg-amber-200 items-center w-full">
          <Nav />
          <div className="flex justify-between gap-2 max-sm:gap-8 items-center w-full">
            <Input
              type={"text"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              plhldr="what are you looking for"
              wdt={"w-4/5"}
              check={<i className="fa fa-magnifying-glass"></i>}
            />
            <ul className="flex gap-4 text-lg mr-2">
              <NavLink to="/wishlist">
                <li className="fa-regular fa-heart"></li>
              </NavLink>
              <NavLink to="/cart">
                <li className="fa fa-cart-shopping"></li>
              </NavLink>
              <NavLink>
                {location.pathname === "/login" ||
                location.pathname === "/signup" ? (
                  ""
                ) : (
                  <li className="fa-regular fa-user"></li>
                )}
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="hidden max-sm:block cursor-pointer mr-6" onClick={handleNav}>
          <i className={`fa fa-2xl ${nav ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </section>
  );
}
