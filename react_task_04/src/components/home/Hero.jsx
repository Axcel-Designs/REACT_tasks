import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "../Button";
import img from "../../assets/hero_endframe.png";
import ShopNow from "../ShopNow";

export default function Hero() {
  const menuList = [
    { label: "electonics" },
    { label: "Home & Lifestyle" },
    { label: "Medicine" },
    { label: "Sports & Outdoor" },
    { label: `Baby's & Toys` },
    { label: "Groceries & Pets" },
    { label: "Health & Pets" },
  ];

  return (
    <section className="flex ">
      <aside className="border-r-2 border-gray-300 p-4 md:w-2/5 lg:w-2/7">
        <ul className="flex flex-col gap-2 md:gap-4">
          <li className="flex justify-between items-center">
            <p>Woman's Fashion</p>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          <li className="flex justify-between items-center">
            <p>Man's Fashion</p>
            <i className="fa-solid fa-angle-right"></i>
          </li>
          {menuList.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </aside>
      <div className="p-4">
        <div className="bg-black flex text-white justify-around items-center p-6">
          <div className="">
            <div className="flex items-center  gap-2 my-10">
              <i className="fa-brands fa-apple text-5xl"></i>
              <p className="">Iphone 14 Series</p>
            </div>
            <h1 className="text-xl md:text-4xl">Up to 10% off Voucher</h1>
            <div className="my-6 bg-black text-white"></div>
            <div className="flex items-center gap-2">
              <ShopNow />
              <div>
                <i className="fa-solid fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
          <div className="max-sm:hidden ">
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
