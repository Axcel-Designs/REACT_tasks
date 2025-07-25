import React from "react";

export default function Services() {
  const serviceList = [
    {
      label: "FREE AND FAST DELIVERY",
      subtitle: "free delivery for all orders over $140",
      icon: "fa-solid fa-truck-fast",
    },
    {
      label: "24/7 CUSTOMER SERVICE",
      subtitle: "friendly 24/7 customer support",
      icon: "fa-solid fa-headset",
    },
    {
      label: "MONEY BACK GUARANTEE",
      subtitle: "we rerun money within 30 days",
      icon: "ri-shield-check-fill",
    },
  ];
  return (
    <>
      {/* <div> */}
      <ul className="flex flex-wrap justify-around gap-4 items-center">
        {serviceList.map((item, index) => (
          <li key={index}>
            <div className="flex justify-around">
              <div className="text-xl p-2 bg-gray-300 rounded-full">
                <div className=" w-10 h-10 rounded-full flex justify-center items-center
                text-white bg-black">
                  <i
                    className={`${item.icon}`}
                  ></i>
                </div>
              </div>
            </div>
            <div className="text-center my-4 flex flex-col justify-center items-center gap-2">
              <h2 className=" text-lg">{item.label}</h2>
              <p>{item.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </>
  );
}
