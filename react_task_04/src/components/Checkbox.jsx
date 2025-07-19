export default function Checkbox ({label}){
    return (
      <>
        <div className="my-4 flex flex-row gap-4 ">
          <input type="checkbox" className="bg-red-900 accent-pink-300" required/>
          <label className="text-gray-700">{label}</label>
        </div>
      </>
    );
}