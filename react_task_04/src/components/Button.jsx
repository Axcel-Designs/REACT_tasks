export default function Button({ label, click, type, width }) {
  return (
    <button
      onClick={click}
      type={type}
      className={`bg-[#db4444] border-2 border-[#db4444] w-full  rounded-sm my-2 p-2 ${width}  text-white font-semibold cursor-pointer`}
    >
      {label}
    </button>
  );
}
export function ButtonTrnparnt({ label, click, type, width, icon, src }) {
  return (
    <button
      onClick={click}
      type={type}
      className={`
                text-gray-600 border-2 border-gray-400 w-full rounded-sm my-2 p-2 bg-white font-semibold cursor-pointer ${width} m-auto flex justify-center gap-2`}
    >
      <div className='flex h-1/5 bg-amber-400 w-fit'>
      <i className={icon}></i>
        <img src={src} alt="google" width="" />
      </div>
      {label}
    </button>
  );
}
