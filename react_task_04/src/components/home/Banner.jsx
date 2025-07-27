import React from "react";
import jbl from "../../assets/JBL_BOOMBOX_2_HERO.png";

export default function Banner() {
  const countdown = [
    { time: "23", unit: "Hours" },
    { time: "05", unit: "Days" },
    { time: "59", unit: "Minutes" },
    { time: "35", unit: "Seconds" },
  ];
  return (
    <section className="bg-black flex text-white justify-around items-center max-md:p-2 p-10 ">
      <div>
        <p className="text-green-500 mb-4">Categories</p>
        <h1 className="text-xl md:text-4xl">Enhance Your Music Experience</h1>
        <div className="my-6">
          <ul className="text-xs text-black flex gap-6">
            {countdown.map((item, index) => (
              <li
                key={index}
                className="bg-white rounded-full flex flex-col justify-center items-center h-14 w-14"
              >
                <p className="font-semibold">{item.time}</p>
                <p>{item.unit}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-green-500 px-8 py-2 my-2">Buy Now</button>
      </div>
      <div className="bg-radial from-gray-200 via-gray-900 to-black rounded-full p-10 max-sm:hidden ">
        <img src={jbl} alt="jbl" />
      </div>
    </section>
  );
}
