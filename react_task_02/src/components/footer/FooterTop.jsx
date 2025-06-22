import { Link } from "react-router-dom";
import { FootLogo } from "../Logo";
import FootSocialLinks from "./FootSocialLinks";
import FootContacts from "./FootContacts";
import FooterInformation from "./FootInformation";

export default function FooterTop() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FootLogo />
        <FooterInformation />
        <FootContacts />
        <FootSocialLinks />
      </section>
    </>
  );
}
