"use client";
import Link from "next/link";
import React from "react";
import { useTodo } from "../context/AuthProvider";

export default function List() {
  const { products } = useTodo();

  return (
    <>
      <section className="">
        <div className='py-4 text-center'>
          <b>No of product: {products.length}</b>
        </div>
        <ul className="flex flex-wrap gap-4 justify-around p-2 ">
          {products.map((item) => (
            <li
              key={item.id}
              className="flex gap-2 bg-gray-800 text-white w-[100px] h-[100px] p-1"
            >
              <Link href={`/lists/${item.id}`}>
                <p> {item.userId}</p>
                <p>{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
