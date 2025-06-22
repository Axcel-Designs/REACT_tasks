import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-800 p-4 text-white">
      <FooterTop />
      <hr className="my-4 text-neutral-600" />
      <FooterBottom />
    </footer>
  );
}
