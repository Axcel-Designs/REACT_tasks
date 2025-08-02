"use client";
import React, { useEffect, useState } from "react";

export default function Footer() {
  // const [year, setYear] = useState(null);
  // useEffect(() => {
  //   setYear(new Date().getFullYear());
  // }, []);
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  );
}
