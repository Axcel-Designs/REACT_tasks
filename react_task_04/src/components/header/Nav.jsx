import React from "react";
import { NavLink } from "react-router-dom";

const menus = [
  { label: "Home", path: "/" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
  { label: "Sign Up", path: "/signup" },
];

function NavLists() {
  return menus.map((item) => (
    <NavLink
      to={item.path}
      key={item.label}
      className={({ isActive }) =>
        `${isActive ? "border-gray-500" : "border-transparent"} border-b-2`
      }
    >
      {item.label}
    </NavLink>
  ));
}

export default function Nav() {
  return (
    <nav className="hidden sm:flex w-full">
      <ul className="flex gap-4 font-semibold">
        <NavLists />
      </ul>
    </nav>
  );
}

export function MobileNav() {
  return <NavLists />;
}
