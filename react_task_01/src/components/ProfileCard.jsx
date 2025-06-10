import React from "react";

function Profile({ profileData, src }) {
  return (
    <>
      <div className="flex flex-col bg-blue-200 p-4 w-max h-max gap-4 place-items-center place-content-center hover:shadow-lg">
        <img src={src}
          className="w-[50px] rounded-full cursor-pointer animate-pulse "
        />
        <div className="">
          <h3 className="text-lg font-bold text-center hover:text-blue-800 mt-4">
            {profileData.name}
          </h3>
          <p className="text-center hover:text-yellow-800">{profileData.bio}</p>
        </div>
      </div>
    </>
  );
}

export default function ProfileCard() {
  return (
    <>
      <Profile
        src={
          "https://cdn-om.cdnpk.net/users/212/21251840/uploads/09cd5a44-e9f0-4f91-932c-f5b47fe04297/09cd5a44-e9f0-4f91-932c-f5b47fe04297-thumb.jpg?token=exp=1749649183~hmac=80f4edb63bc4f6a68ae5d80b5526e437"
        }
        profileData={{
          name: "Acha Excel",
          bio: "Front-End Developer",
        }}
      />
    </>
  );
}
