import React from "react";

export default function InfoBar() {
  return (
    <>
      <div className="bg-white rounded-2xl p-2 flex justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-2">
          <div className="bg-green-200 p-2 rounded-4xl">
            <li className="fa-solid fa-users text-green-600"></li>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Total Users</p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-green-200 p-2 rounded-4xl">
            <li className="fa-solid fa-user text-green-600"></li>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Members</p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="bg-green-200 p-2 rounded-4xl">
            <li className="fa-solid fa-desktop text-green-600"></li>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Active Now</p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
