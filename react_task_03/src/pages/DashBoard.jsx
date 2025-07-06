import Button, { ButtonBgWht } from "../components/Button";
import { dashboardMenu } from "../data/dashboardMenu";
import profilePic from "../assets/profilePic.png";
import { useState } from "react";
import MiniMenu from "../components/MiniMenu";

export default function Dasboard() {
  const [hideMenubar, setHideMenubar] = useState(true);

  function tgglMenu() {
    setHideMenubar(!hideMenubar);
  }

  return (
    <>
      <main className="flex  w-full h-full">
        {hideMenubar ? (
          <aside className="md:flex  w-2/5 lg:w-[18%] p-4 md:p-6 flex justify-between flex-col">
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
        {/* main section */}
        <section className="bg-gray-200 grow h-full md:p-6 p-4 flex flex-col gap-4 min-w-fit">
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
          <div className="bg-white rounded-2xl p-2 flex justify-between items-center gap-4">
            <div className="flex justify-between items-center gap-2">
              <div className="bg-green-200 p-2 rounded-4xl">
                <li className="fa-solid fa-users text-green-600"></li>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Total Users</p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="bg-green-200 p-2 rounded-4xl">
                <li className="fa-solid fa-user text-green-600"></li>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Members</p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="bg-green-200 p-2 rounded-4xl">
                <li className="fa-solid fa-desktop text-green-600"></li>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs">Active Now</p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="bg-white grow rounded-2xl p-2">
            <div className="flex justify-between items-center gap-4">
              <div>
                <p className="font-bold text-lg">All Customers</p>
              </div>
              <div className="flex gap-2 items-center ">
                <div className="border-gray-300 px-2 py-1 border-2 rounded-2xl  ">
                  <li className="fa-solid fa-search"></li>
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none bg-white px-2"
                    width="w-1/5"
                  />
                </div>
                <div className="flex items-center bg-gray-300 rounded-2xl px-2 py-1">
                  <p className="text-sm">sort by</p>
                  <select name="" id=""></select>
                </div>
              </div>
            </div>
            <div>dd</div>
          </div>
        </section>
      </main>
    </>
  );
}
