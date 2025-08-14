"use client";
import useHoverHook from "@/hooks/HoverHook";

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
