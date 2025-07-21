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
      <div className={`my-2 rounded-sm ${wdt}`}>
        <label
          className="shrink-0 text-gray-500 select-none text-sm/6"
          htmlFor={Input.name}
        >
          {label}
        </label>
        <div className="flex flex-row  items-center justify-between bg-gray-200 w-fit rounded-sm">
          <input
            type={type}
            name={name}
            placeholder={plhldr}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`
              text-gray-900 placeholder:text-gray-700 focus:outline-none p-2`}
          />
          <div className="p-2">{check}</div>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    </>
  );
}
export function InputTrnparnt({
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
      <div className={`rounded-sm ${wdt} border-2 border-gray-600`}>
        <label
          className="shrink-0 text-gray-500 select-none text-sm/6"
          htmlFor={Input.name}
        >
          {label}
        </label>
        <div className="flex flex-row items-center justify-between w-fit rounded-sm">
          <input
            type={type}
            name={name}
            placeholder={plhldr}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`
              text-gray-900 placeholder:text-gray-700 focus:outline-none p-1`}
          />
          <div className="">{check}</div>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    </>
  );
}
