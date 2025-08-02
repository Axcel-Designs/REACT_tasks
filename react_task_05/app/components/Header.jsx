import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-2 shadow-md flex items-center gap-4 justify-center">
      <h2 className="text-2xl font-bold text-center">ToDo App</h2>
      <button className="font-bold border-2 border-white px-4 py-1">
        <Link href="/lists">Lists</Link>
      </button>
      <button className="font-bold border-2 border-white px-4 py-1">
        <Link href="/lists/addToLists">Add to Lists</Link>
      </button>
    </header>
  );
}
