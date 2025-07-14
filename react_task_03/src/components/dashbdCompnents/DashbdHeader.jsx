import { useAuth } from "../../context/AuthProvider";

export default function DashbdHeader() {
  const { fullName } = useAuth();
  return (
    <>
      <header className="flex flex-col md:flex-row gap-2 justify-between items-start">
        <div className="flex">
          <p>Hello {fullName}</p>
          <span>
            <li className="fa-solid fa-hand ml-2"></li>
          </span>
          <input type="text" />
        </div>
        <div className="bg-white px-2 py-1 rounded-2xl  ">
          <li className="fa-solid fa-search"></li>
          <input
            placeholder="Search"
            typeof="search"
            className="outline-none px-2"
          />
        </div>
      </header>
    </>
  );
}
