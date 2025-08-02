"use client";
import Link from "next/link";
import React from "react";
import { useTodo } from "../context/AuthProvider";

export default function List() {
  const { products } = useTodo();

  return (
    <>
      <section className="bg-black text-white">
        <div className="py-4 text-center">
          <b>No of product: {products.length}</b>
        </div>
        <ul className="flex flex-wrap gap-4 justify-around p-2">
          {products.map((item) => (
            <li
              key={item.id}
              className="flex gap-2 bg-gray-800 shadow-lg/20 shadow-white text-white w-[200px] min-h-fit p-1 rounded-sm">
              <Link href={`/lists/${item.id}`}>
                <p>UserID: {item.userId}</p>
                <p>Title: {item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
