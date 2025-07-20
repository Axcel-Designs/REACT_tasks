import React from "react";
import { accountDt, quickLinkDt } from "../../data/footerData";
import { NavLink } from "react-router-dom";
import qr from "../../../public/qrCode.png";
import gp from "../../assets/googleplay.png";
import as from "../../assets/appstore.png";
import Input from "../Input";

export default function FooterTop() {
  return (
    <main className="bg-black text-white w-full">
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 max-sm:text-center gap-4 w-5/6 md:w-9/10 lg:w-5/6 m-auto bg-gray-800">
        <div>
          <h1 className="max-sm:mb-0 mb-4 font-bold">Exclusive</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="font-semibold">Subscribe</li>
            <li>Get 10% off your first order</li>
            <li className="border-2 border-gray-700  w-5/7 max-sm:m-auto">
              <input type="text" placeholder="Enter your email" />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-2 font-bold">Support</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <l1>
              <p>111 Bijay sarani, Dahaka, Bangladesh</p>
            </l1>
            <l1>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </l1>
            <l1>
              <a href="tel://+888-888-9999">+888-888-9999</a>
            </l1>
          </ul>
        </div>
        <div>
          <h1 className="max-sm:mb-0 mb-4 font-bold">Account</h1>
          <ul className="flex flex-col gap-2 text-sm">
            {accountDt.map((item, i) => (
              <NavLink key={i} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="max-sm:mb-0 mb-4 font-bold">Quick Link</h1>
          <ul className="flex flex-col gap-2 text-sm">
            {quickLinkDt.map((item, i) => (
              <NavLink key={i} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="max-sm:mb-0 mb-4 font-bold">Download App</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-xs text-gray-600">
              <p>Save $3 with App New User only</p>
            </li>
            <li className="flex gap-2 items-center max-sm:justify-center">
              <img src={qr} alt="qrscan" width={"fit-content"} />
              <div className="flex flex-col gap-2">
                <img src={gp} alt="googlePlay" />
                <img src={as} className={""} alt="appStore" />
              </div>
            </li>
            <li className="flex gap-2 max-sm:justify-center">
              <li className="fa-brands fa-facebook-f"></li>
              <li className="fa-brands fa-twitter"></li>
              <li className="fa-brands fa-instagram"></li>
              <li className="fa-brands fa-linkedin"></li>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
