import { Link } from "react-router-dom";
import { navbarLinks } from "../../data/DataList";
import { useState } from "react";

export function Navlinks() {
  return (
    <>
      {navbarLinks.map((link) => (
        <li
          key={link.id}
          className="hover:border-black active:bg-gray-500 border-y-2 border-white transition-colors duration-300"
        >
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function burger() {
    setOpen(!open);
  }

  return (
    <>
      <nav className=" justify-between items-center p-4 bg-white">
        <ul className="hidden lg:flex gap-6 lg:gap-16 font-semibold text-lg">
          <Navlinks />
        </ul>
        <div className="lg:hidden flex justify-end pointer">
          <button onClick={burger}>
            <i className="fa-solid fa-bars fa-2xl"></i>
            </button>
        </div>
      {!open && <ul className="lg:hidden flex flex-col basis-full">
        <Navlinks/>
        </ul>}
      </nav>
    </>
  );
}
