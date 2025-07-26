import React from "react";

export default function SectionTitle({title,header}) {
  return (
    <>
      <div className="flex text-[#db4444] items-center gap-2">
        <div className="bg-[#db4444] py-2 ">gg</div>
        <p>{title}</p>
      </div>
      <br />
      <div>
        <h2>{header}</h2>
      </div>
    </>
  );
}
