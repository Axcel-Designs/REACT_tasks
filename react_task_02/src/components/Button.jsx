export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="z-40 mt-4 bg-white hover:bg-gray-200 text-gray-500 py-2 px-4 shadow cursor-pointer transition-colors duration-300"
    >
      {label}
      <i className="fa-solid fa-arrow-right ml-2"></i>
    </button>
  );
}
export function ButtonDark({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        className="mt-4 bg-neutral-800 hover:bg-neutral-600 text-white py-2 px-4 shadow cursor-pointer"
      >
        {label}
        <i className="fa-solid fa-arrow-right ml-2"></i>
      </button>
    );
  }