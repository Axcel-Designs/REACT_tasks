import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavIcons({ closeNav }) {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.authKey.isLoggedIn);

  return (
    <>
      <ul className="flex gap-2 text-xl ">
        <NavLink
          to="/wishlist"
          className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
          onClick={closeNav}
        >
          <li className="fa-regular fa-heart"></li>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
          onClick={closeNav}
        >
          <li className="fa fa-cart-shopping"></li>
        </NavLink>
        <NavLink
          className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
          // to="/signup"
          onClick={closeNav}
        >
          {location.pathname !== "/login" && location.pathname !== "/signup" ? (
            <li className="fa-regular fa-user"></li>
          ) : (
            ""
          )}
        </NavLink>
      </ul>
    </>
  );
}
