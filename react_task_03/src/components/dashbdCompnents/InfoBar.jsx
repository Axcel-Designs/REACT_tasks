import React from "react";
import { customersData } from "../../data/customersData";

export default function InfoBar() {
  const customersTotal = customersData.length;
  const activeMembers = customersData.filter(
    (customer) => customer.status === "active"
  ).length;

  return (
    <>
      <div className="bg-white rounded-2xl p-2 lg:px-10 w-full flex justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-2">
          <div className="bg-green-200 p-2 rounded-4xl w-14 h-14 flex justify-center items-center">
            <li className="fa-solid fa-users fa-xl text-green-600"></li>
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Total Users</p>
            <p className="text-lg font-bold">{customersTotal}</p>
            <p></p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-green-200 p-2 rounded-4xl w-14 h-14 flex justify-center items-center">
            <li className="fa-solid fa-user fa-xl text-green-600"></li>
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Members</p>
            <p>{}</p>
            <p></p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-green-200 p-2 rounded-4xl w-14 h-14 flex justify-center items-center">
            <li className="fa-solid fa-desktop fa-xl text-green-600"></li>
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Active Now</p>
            <p className="font-bold text-lg">{activeMembers}</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
