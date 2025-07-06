import { dashboardMenu } from "../data/dashboardMenu";
import profilePic from "../assets/profilePic.png";

export default function MiniMenu({ onToggle }) {
  return (
    <>
      <aside className="md:flex max-w-fit p-4 md:p-6 flex justify-between flex-col">
        <header className="">
          <nav>
            <button className="flex justify-around mb-8 cursor-pointer" onClick={onToggle}>
              <i className="fa-solid fa-gear"></i>
            </button>
            <ul className="flex flex-col gap-2 text-gray-700 ">
              {dashboardMenu.map((menu) => (
                <div
                  key={menu.label}
                  className="flex items-center justify-around gap-2 cursor-pointer py-2 px-1 hover:bg-[#5932EA] rounded-lg hover:text-gray-200"
                >
                  <div>
                    <li className={menu.icon}></li>
                  </div>
                </div>
              ))}
            </ul>
          </nav>
        </header>
        <div className="flex gap-2 items-center align-center">
          <img
            src={profilePic}
            alt=""
            width={"50%"}
            className={"min-w-[40px]"}
          />
        </div>
      </aside>
    </>
  );
}
