"use client";
import InputBox from "@/app/components/InputBox";
import { useTodo } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";
import React from "react";

export default function AddToLists() {
  const router = useRouter();
  const { target, onTarget, addProduct } = useTodo();

  function handleSubmit(e) {
    e.preventDefault();b
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
            label={"Title"}
            value={target.newTitle}
            name={"newTitle"}
            change={(e) => onTarget(e)}
          />
          <div className="max-md:flex-col max-md:items-start flex gap-4 items-center">
            <label>
              <b>Compeleted:</b>
            </label>
            <InputBox
              type={"radio"}
              label={"True"}
              value={"true"}
              check={target.newCompleted == "true"}
              name={"newCompleted"}
              change={(e) => onTarget(e)}
            />
            <InputBox
              type={"radio"}
              label={"False"}
              value={"false"}
              check={target.newCompleted == "false"}
              name={"newCompleted"}
              change={(e) => onTarget(e)}
            />
          </div>
          <div className="flex justify-around items-center py-4">
            <button
              type="submit"
              className={`bg-[#db4444] border-2 px-8 border-[#db4444] rounded-sm my-2 p-2 text-white font-semibold cursor-pointer`}
            >
              Create Item
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
