import React from "react";
import excel from "../assets/excel.jpg"; // Assuming the image is in the assets folder

function Profile({ profileData, src }) {
  return (
    <>
      <div className="flex flex-col bg-blue-200 p-6 w-4/5 max-w-lg h-max gap-4 place-items-center place-content-center hover:shadow-lg">
        <div className="bg-blue-300 hover:bg-blue-400 p-2 rounded-full ease-in-out delay-100 ">
          <img
            src={src}
            className="w-[100px] rounded-full cursor-pointer transition-transform duration-200 hover:scale-110"
          />
        </div>
        <div className="hover:bg-white rounded-lg p-4 shadow-md w-full max-w-lg bg-purple-200">
          <h3 className="text-lg font-bold text-center text-gray-900 ">
            {profileData.name}
          </h3>
          <p className="text-center text-gray-700 mt-3">{profileData.bio}</p>
        </div>
      </div>
    </>
  );
}

export default function ProfileCard() {
  return (
    <>
      <Profile
        src={excel}
        profileData={{
          name: "Acha Excel",
          bio: "Passionate Front-End Developer learning how to build responsive and user-friendly web applications using React and modern web technologies. Dedicated to creating seamless digital experiences and continuously learning new tools.",
        }}
      />
    </>
  );
}
