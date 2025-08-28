import React from "react";

export default function Input({ type, holder, name, id, value,change, label }) {
  return (
    <div className="ring-2 rounded-sm py-1 px-2 flex gap-4">
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        placeholder={holder}
        name={name}
        id={name || id}
        value={value}
        onChange={change}
        required
        className="grow outline-none bg-amber-200 placeholder-gray-400"
      />
    </div>
  );
}
