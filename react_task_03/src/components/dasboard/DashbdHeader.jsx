export default function DashbdHeader() {
  return (
    <>
      <header className="flex justify-between items-center min-h-fit">
        <div className="flex gap-1">
          <p>Hello {}</p>
          <span>
            <li className="fa-solid fa-hand"></li>
          </span>
        </div>
        <div className="bg-white px-2 py-1 rounded-2xl  ">
          <li className="fa-solid fa-search"></li>
          <input
            type="text"
            placeholder="Search"
            typeof="search"
            className="outline-none px-2"
          />
        </div>
      </header>
    </>
  );
}
