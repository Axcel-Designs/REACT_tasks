import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

export default function Header() {
  return (
    <>
      <header className="w-full text-sm">
        <HeaderTop />
        <HeaderBottom />
      </header>
    </>
  );
}
