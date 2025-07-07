import profilePic from "../../assets/profilePic.png";
import { useState } from "react";
import MiniMenu from "./MiniMenu";
import { dashboardMenu } from "../../data/dashboardMenu";
import { ButtonBgWht } from "../Button";

export default function SideMenu() {
  const [hideMenubar, setHideMenubar] = useState(true);

  function tgglMenu() {
    setHideMenubar(!hideMenubar);
  }
  return (
    <>
      {hideMenubar || window.innerWidth > 768 ? (
        <aside className="md:flex  w-2/5 lg:w-[18%] max-w-[215px] bg-[white] p-4 md:p-6 flex justify-between flex-col">
          <header className="">
            <nav>
              <button
                className="flex items-center mb-4 gap-1 cursor-pointer"
                onClick={tgglMenu}
              >
                <i className="fa-solid fa-gear"></i>
                <h1 className="text-xl font-bold">Dashboard</h1>
              </button>
              <ul className="flex flex-col gap-2 text-gray-700">
                {dashboardMenu.map((menu) => (
                  <div
                    key={menu.label}
                    className="flex items-center justify-between px-1 py-2 cursor-pointer hover:bg-[#5932EA] hover:text-gray-200  rounded-xl"
                  >
                    <div className="flex items-center gap-1">
                      <li className={menu.icon}></li> {menu.label}
                    </div>
                    <li className={menu.arrow}></li>
                  </div>
                ))}
              </ul>
            </nav>
          </header>
          <div>
            <div className="flex flex-col bg-[#5932EA] p-2 rounded-2xl text-white text-center">
              <p> Uprade to PRO to get access all features</p>
              <ButtonBgWht label={"Get pro Now"} width={"w-4/5"} />
            </div>
            <div className="flex justify-between align-center my-4">
              <div className="flex gap-2 items-center align-center">
                <img src={profilePic} alt="" width={"30%"} />
                <div>
                  <p className="text-sm">Evano</p>
                  <p className="text-xs">Project Manager</p>
                </div>
              </div>
              <div>
                <li className="fa-solid fa-chevron-down"></li>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <MiniMenu onToggle={tgglMenu} />
      )}
    </>
  );
}
