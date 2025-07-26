import React from "react";
import { accountDt, quickLinkDt } from "../../data/footerData";
import { NavLink } from "react-router-dom";
import qrs from "../../assets/qrCode.png";
import gp from "../../assets/googleplay.png";
import as from "../../assets/appstore.png";
import { InputTrnparnt } from "../Input";

export default function FooterTop() {
  // w-5/6 md:w-9/10 lg:w-5/6
  return (
    <main className="bg-black text-white w-full flex justify-around">
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-10 max-sm:text-center gap-6">
        {/* Exclusive */}
        <div>
          <h1 className="max-sm:mb-0 mb-4 font-bold">Exclusive</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="font-semibold">Subscribe</li>
            <li>Get 10% off your first order</li>
            <li className="max-sm:m-auto w-fit ">
              <InputTrnparnt
                id="email"
                wdt={"pr-2 text-gray-200"}
                plhldr={"Enter your email"}
                check={<i className="bx  bx-send-alt"></i>}
              />
            </li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h1 className="mb-2 font-bold">Support</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <p>111 Bijay sarani, Dahaka, Bangladesh</p>
            </li>
            <li>
              <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
            </li>
            <li>
              <a href="tel://+888-888-9999">+888-888-9999</a>
            </li>
          </ul>
        </div>
        {/* Account */}
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
        {/* Quick Link */}
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
        {/* Download App */}
        <div className="sm:max-lg:bg-black sm:max-lg:col-span-2">
          <h1 className="max-sm:mb-0 mb-4 font-bold">Download App</h1>
          <ul className="flex flex-col gap-2 text-sm">
            <li className="text-xs text-gray-600">
              <p>Save $3 with App New User only</p>
            </li>
            <li className="flex gap-2 items-center max-sm:justify-center">
              <img src={qrs} alt="qrscan" width={"fit-content"} />
              <div className="flex flex-col gap-2">
                <img src={gp} alt="googlePlay" />
                <img src={as} className={""} alt="appStore" />
              </div>
            </li>
            <li className="flex gap-2 max-sm:justify-center">
              <span className="fa-brands fa-facebook-f"></span>
              <span className="fa-brands fa-twitter"></span>
              <span className="fa-brands fa-instagram"></span>
              <span className="fa-brands fa-linkedin"></span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
