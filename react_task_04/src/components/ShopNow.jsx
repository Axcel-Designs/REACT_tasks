import React from "react";
import { NavLink } from "react-router-dom";

export default function ShopNow({to}) {
  return (
    <NavLink to={to} className="text-white font-semibold">
      <h3 className="border-b-1 border-white w-fit">ShopNow</h3>
    </NavLink>
  );
}
