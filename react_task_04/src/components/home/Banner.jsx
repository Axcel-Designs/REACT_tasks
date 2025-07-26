import React from "react";
import jbl from "../../assets/JBL_BOOMBOX_2_HERO.png";

export default function Banner() {
  return (
    <section className="bg-black flex text-white justify-around items-center p-10 ">
      <div>
        <p className="text-green-500 mb-4">Categories</p>
        <h1 className="text-xl md:text-4xl">Enhance Your Music Experience</h1>
        <div className="my-6">
          <ul className="text-xs text-black flex gap-6">
            <li className="bg-white rounded-full flex flex-col justify-center items-center h-15 w-15">
              <p className="font-semibold">23</p>
              <p>Hours</p>
            </li>
            <li className="bg-white rounded-full flex flex-col justify-center items-center h-15 w-15">
              <p className="font-semibold">05</p>
              <p>Days</p>p
            </li>
            <li className="bg-white rounded-full flex flex-col justify-center items-center h-15 w-15">
              <p className="font-semibold">59</p>
              <p>Minutes</p>
            </li>
            <li className="bg-white rounded-full flex flex-col justify-center items-center h-15 w-15">
              <p className="font-semibold">35</p>
              <p>Seconds</p>
            </li>
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
