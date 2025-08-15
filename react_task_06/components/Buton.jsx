"use client";
import useHoverHook from "@/hooks/HoverHook";
import { useParams } from "next/navigation";

export default function Button({ label, type, click }) {
  const { active, handleHover } = useHoverHook();
  return (
    <div>
      <button
        {...handleHover}
        onClick={click}
        className={`ring ring-blue-800 py-1 px-4 rounded-lg shadow-sm shadow-blue-300 ${
          active ? "bg-blue-800 text-white" : "text-blue-800 bg-white"
        } `}
        type={type}
      >
        <h4>{label}</h4>
      </button>
    </div>
  );
}

export function DelButton() {
  const { id } = useParams();
  function itemDel() {
    const res = fetch(`http://localhost:3000/api/todo/${id}`, {
      method: "DELETE",
    });
  }
  return (
    <button
      onClick={() => itemDel()}
      className="bg-red-600 text-white py-1 px-2 hover:text-red-600 hover:bg-[#fff] ring-red-600 rounded-lg"
    >
      <h4>Delete</h4>
    </button>
  );
}
