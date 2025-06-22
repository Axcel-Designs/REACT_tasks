import { Link } from "react-router-dom";

export default function FootSocialLinks() {
  return (
    <section className="grid justify-center align-center">
      <div className="flex flex-col space-y-4">
      <h3 className="font-semibold">Social Media</h3>
      <ul className="flex space-x-4">
        <li>
          <i class="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i class="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i class="fa-brands fa-linkedin"></i>
        </li>
        <li>
          <i class="fa-brands fa-pinterest"></i>
        </li>
      </ul>
    </div>
    </section>
  );
}
