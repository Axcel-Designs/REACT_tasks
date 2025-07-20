export default function Input({
  label,
  type,
  name,
  wdt,
  plhldr,
  value,
  onChange,
  onBlur,
  id,
  error,
  check,
}) {
  return (
    <>
      <div className={`my-2 rounded-sm ${wdt} flex flex-col bg-gray-50`}>
        <label
          className="shrink-0 text-gray-500 select-none text-sm/6"
          htmlFor={Input.name}
        >
          {label}
        </label>
        <div className="flex flex-row  items-center justify-between ">
          <input
            type={type}
            name={name}
            placeholder={plhldr}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`
              text-gray-900 placeholder:text-gray-700 focus:outline-none p-2 bg-gray-50 rounded-sm`}
          />
          <div className="flex gap-2 p-2 justify-around items-center">
            {check}
          </div>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    </>
  );
}
