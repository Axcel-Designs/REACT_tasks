import { Link } from "react-router-dom";
import { navbarLinks } from "../../data/DataList";

export default function FootInformation() {
  return (
    <section className="grid justify-center align-center">
      <div className="flex flex-col space-y-4">
        <h3 className="font-semibold">Information</h3>
        <div>
          <ul className="flex flex-col space-y-2">
            {navbarLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
