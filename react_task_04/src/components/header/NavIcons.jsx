import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavIcons({ closeNav,miniMenu }) {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.authKey.isLoggedIn);

  return (
    <>
      <ul className="flex gap-2 text-xl items-center">
        <NavLink
          to="/wishlist"
          className={({ isActive }) => `${isActive ? "text-[#db4444]" : ""}`}
          onClick={closeNav}
        >
          <li className="fa-regular fa-heart"></li>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => `${isActive ? "text-[#db4444]" : ""}`}
          onClick={closeNav}
        >
          <li className="fa fa-cart-shopping"></li>
        </NavLink>
        <NavLink onClick={miniMenu}>
          {isLoggedIn &&
          location.pathname !== "/login" &&
          location.pathname !== "/signup" ? (
            <li className="fa-regular fa-user text-white bg-[#db4444] p-2 text-sm rounded-full"></li>
          ) : (
            ""
          )}
        </NavLink>
      </ul>
    </>
  );
}
