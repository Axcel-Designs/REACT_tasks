import React from "react";

export default function InputBox({
  check,
  type,
  id,
  value,
  name,
  change,
  holder,
  label,
}) {
  return (
    <div>
      <label htmlFor={id || name} className="flex gap-2 p-1">
        <b>{label}:</b>
        <input
          type={type}
          id={id || name}
          placeholder={holder}
          value={value}
          name={name}
          checked={check}
          onChange={change}
          className=""
        />
      </label>
    </div>
  );
}
