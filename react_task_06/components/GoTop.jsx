"use client";
import useHoverHook from "@/hooks/HoverHook";
import React from "react";

export default function GoTop() {
  const { active, handleHover } = useHoverHook();
  return (
    <section className="sticky bottom-10 p-8 flex justify-end cursor-pointer">
      <div  {...handleHover}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={active ? "text-red-800" : ""}
      >
        <i className="fa-solid fa-angles-up fa-xl"></i>
      </div>
    </section>
  );
}
