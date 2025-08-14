"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navBar = [
  { label: "Home", path: "/" },
  { label: "About", path: "about" },
  { label: "Add", path: "work" },
  { label: "Search", path: "blog" },
];

export default function Header() {
  const path = usePathname();
  return (
    <>
      <header className="flex items-center justify-between md:justify-around p-4 gap-2 shadow-lg/20">
        <div className="flex items-center">
          <div className="rounded-full flex justify-around items-center text-center border-gray-400">
            <h3>Axcel Todo</h3>
          </div>
        </div>
        <nav className="flex gap-4">
          {navBar.map((menu, i) => (
            <Link
              href={menu.path}
              key={i}
              className={path === menu.path ? "font-bold" : ""}
            >
              {menu.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
