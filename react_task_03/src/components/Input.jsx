export default function Input({
  label,
  type,
  name,
  width,
  placeholder,
  value,
  onChange,
  id,
  show,
  check,
  showEye,
}) {
  return (
    <>
      <div
        className={`my-2 border-2 border-gray-200 rounded-2xl py-2 px-4 ${width} flex flex-col focus:border-[#5932EA] hover:border-[#5932EA]`}
      >
        <label
          className="shrink-0 text-gray-500 select-none text-sm/6"
          htmlFor={Input.name}
        >
          {label}
        </label>
        <div className="flex flex-row grow items-center justify-between ">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            className={`
              text-gray-900 placeholder:text-gray-400 focus:outline-none w-7/8`}
            required
          />
          <div className="flex gap-2 justify-around items-center">
            <div>{check}</div>
            <div onClick={showEye}>{show}</div>
          </div>
        </div>
      </div>
    </>
  );
}
