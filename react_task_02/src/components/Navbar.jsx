import { Link } from "react-router-dom";
import { navbarLinks } from "../data/DataList";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <div className="sm:hidden flex justify-end">
        <i className="fa-solid fa-bars fa-xl"></i>
      </div>
      <ul className="flex gap-6  lg:gap-16 font-semibold text-lg">
        {navbarLinks.map((link) => (
          <li
            key={link.id}
            className="hover:border-black active:bg-gray-500 border-y-2 border-white transition-colors duration-300"
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
