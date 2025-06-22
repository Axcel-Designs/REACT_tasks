export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 bg-white text-gray-500 py-2 px-4 rounded shadow"
    >
      {label}
      <i className="fa-solid fa-arrow-right ml-2"></i>
    </button>
  );
}
