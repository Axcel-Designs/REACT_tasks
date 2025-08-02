import React from "react";

export default function InputBox({ type,id, value, name, change, holder, label }) {
  return (
    <div>
      <label htmlFor={name} className="flex gap-2 p-1">
        <b>{label}:</b>
        <input
          type={type}
          id={id}
          placeholder={holder}
          value={value}
          name={name}
          onChange={change}
          className=""
        />
      </label>
    </div>
  );
}
