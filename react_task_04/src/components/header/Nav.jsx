import React from "react";
import { NavLink } from "react-router-dom";

const menus = [
  { label: "Home", path: "/" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
  { label: "Sign Up", path: "/signup" },
];

function NavLists({ closeNav }) {
  return menus.map((item) => (
    <NavLink
      to={item.path}
      key={item.label}
      className={({ isActive }) =>
        `${
          isActive ? "border-gray-400" : "border-transparent"
        } border-b-2 hover:border-gray-900 pb-2`
      }
      onClick={closeNav}
    >
      {item.label}
    </NavLink>
  ));
}

export default function DeskNav() {
  return (
    <nav className="hidden md:flex w-full justify-around ">
      <ul className="flex gap-4 font-semibold">
        <NavLists />
      </ul>
    </nav>
  );
}

export function MobileNav({ closeNav }) {
  return (
    <nav>
      <ul className="flex flex-col gap-3 font-semibold">
        <NavLists closeNav={closeNav} />
      </ul>
    </nav>
  );
}
