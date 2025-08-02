"use client";

import React from "react";
import { useTodo } from "@/app/context/AuthProvider";
import Link from "next/link";

export default function Page({ params }) {
  const { products, delProduct } = useTodo();
  const { id } = React.use(params);

  const product = products.find((item) => item.id === Number(id));

  function deleteProduct(id) {
    delProduct(id);
    navigate.push("/lists");
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className="p-4 flex justify-around">
      <div className="shadow-xl/20 p-4 bg-yellow-100 w-9/12 lg:w-5/12">
        <h2 className="text-xl font-bold">Product Details</h2>
        <p>
          <b>ID:</b> {product.id}
        </p>
        <p>
          <b>User ID:</b> {product.userId}
        </p>
        <p>
          <b>Title:</b> {product.title}
        </p>
        <p>
          <b>Completed:</b> {product.completed ? "Yes" : "No"}
        </p>
        <div className="flex justify-around items-center py-4">
          <Link
            href={"/lists"}
            onClick={() => delProduct(product.id)}
            className={`bg-[#db4444] border-2 px-8 border-[#db4444] hover:text-[#db4444] hover:bg-white rounded-sm my-2 p-2 text-white font-semibold`}
          >
            Delete
          </Link>
          <Link
            href={`/lists/${product.id}/edit`}
            className={`text-[#db4444] border-2 px-8 border-[#db4444] hover:text-white  hover:bg-[#db4444] rounded-sm my-2 p-2 bg-white font-semibold`}
          >
            Edit
          </Link>
        </div>
      </div>
    </section>
  );
}
