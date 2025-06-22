import logo from "/navLogoName.svg"; // Adjust the path as necessary
import footlogo from "/footerLogo.svg";

export default function Logo() {
  return (
    <div className="flex justify-center align-center">
      <img src={logo} alt="Header Logo" />
    </div>
  );
}

export function FootLogo() {
  return (
    <section className="flex justify-center align-center">
      <div className="flex flex-col space-y-4">
        <img src={footlogo} alt="Footer Logo" />
      </div>
    </section>
  );
}
