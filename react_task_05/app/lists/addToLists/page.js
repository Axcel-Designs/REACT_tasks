"use client";
import InputBox from "@/app/components/InputBox";
import { useTodo } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";
import { Input } from "postcss";
import React from "react";

export default function AddToLists() {
  const router = useRouter();
  const { target, onTarget, addProduct } = useTodo();

  function handleSubmit(e) {
    e.preventDefault();
    addProduct();
    router.push("/lists");
  }

  return (
    <section className="p-4 flex justify-around w-full ">
      <div className="shadow-xl/20 p-4 bg-yellow-100 w-9/12 lg:w-5/12">
        <h2 className="text-xl font-bold">Product Details</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 pb-4">
          <InputBox
            type={"number"}
            holder={"User Id"}
            label={"User ID"}
            value={target.newUserId}
            name={"newUserId"}
            change={(e) => onTarget(e)}
          />
          <InputBox
            type={"text"}
            holder={"Title"}
            label={"Title "}
            value={target.newTitle}
            name={"newTitle"}
            change={(e) => onTarget(e)}
          />
          <div className="flex gap-4">
            <InputBox
              type={"radio"}
              label={"True "}
              value={target.newCompleted}
              name={"completed"}
              change={(e) => onTarget(e)}
            />
            <InputBox
              type={"radio"}
              label={"False "}
              value={target.newCompleted}
              name={"completed"}
              change={(e) => onTarget(e)}
            />
          </div>
          <label>
            <b>Compeleted:</b>
          </label>
          <div className="flex justify-around items-center py-4">
            <button
              type="submit"
              className={`bg-[#db4444] border-2 px-8 border-[#db4444] rounded-sm my-2 p-2 text-white font-semibold cursor-pointer`}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
