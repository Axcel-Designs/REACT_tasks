import { Link } from "react-router-dom";

export default function FootContacts() {
  return (
    <section className="grid justify-center align-center">
      <div className="flex flex-col space-y-4">
        <h3 className="font-semibold text-center md:text-left">Contacts</h3>
        <ul className="flex flex-col space-y-2 justify-center align-center ">
          <li className="text-center md:text-left">
            <i class="fa-solid fa-location-dot"></i>
            <span className="ml-4">123 Main St, Anytown, USA</span>
          </li>
          <li className="text-center md:text-left">
            <i class="fa-solid fa-phone "></i>
            <span className="ml-4">+234 123 4567</span>
          </li>
          <li className="text-center md:text-left">
            <i class="fa-solid fa-envelope"></i>
            <Link to="mailto:info@example.com">
              <span className="ml-4">info@example.com</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}