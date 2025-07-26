import React from "react";
import SectionTitle from "./SectionTitle";

export default function BrowseCategory() {
  const categoriesList = [
    { label: "Phones", icon: "ri-customer-service-line ri-5x" },
    { label: "Computers", icon: "ri-computer-line ri-5x" },
    { label: "SmartWatch", icon: "ri-timer-line ri-5x" },
    { label: "Camera", icon: "ri-camera-line ri-5x" },
    { label: "HeadPones", icon: "ri-customer-service-line ri-5x" },
    { label: "Gaming", icon: "ri-gamepad-line ri-5x" },
  ];
  return (
    <section>
      <SectionTitle title="Categories" />
      <div className="flex justify-between items-center">
        <h2>Browse By Categories</h2>
        <div className="flex items-center gap-2">
          <div className="bg-gray-200 rounded-full flex justify-around items-center w-8 h-8">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="bg-gray-200 rounded-full flex justify-around items-center w-8 h-8">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-around my-4">
          {categoriesList.map((item) => (
            <li
              key={item.label}
              className="flex p-4 justify-around items-center border-1 border-black"
            >
              <div className="flex flex-col justify-around items-center">
                <i className={item.icon}></i>
                <p>{item.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
