export default function Button({ label, click, type, width }) {
  return (
    <button
      onClick={click}
      type={type}
      className={`bg-[#db4444] border-2 border-[#db4444] rounded-sm my-2 p-2 ${width}  text-white font-semibold cursor-pointer`}
    >
      {label}
    </button>
  );
}
export function ButtonTrnparnt({ label, click, type, width, src }) {
  return (
    <button
      onClick={click}
      type={type}
      className={`
                text-gray-600 border-2 border-gray-300 w-full min-w-fit rounded-sm my-2 p-2 bg-white font-semibold cursor-pointer ${width} m-auto flex justify-center gap-2 items-center`}
    >
      {/* <div className="flex h-1/5 w-1/12"> */}
        {/* <i className={icon}></i> */}
        <img src={src} width="" />
      {/* </div> */}
      {label}
    </button>
  );
}
