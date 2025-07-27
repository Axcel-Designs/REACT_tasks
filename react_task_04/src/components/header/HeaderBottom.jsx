import React, { useState } from "react";
import Input from "../../components/Input";
import DeskNav, { MobileNav } from "./Nav";
import NavIcons from "./NavIcons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

export default function HeaderBottom() {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const onToggle = () => setToggle(!toggle);
  const toggleNav = () => setNav(!nav);

  const sigedOut = async () => {
    navigate("/");
    onToggle();
    dispatch(logout());
   await signOut(auth)
      .then(() => {
        console.log('Sign-out successful')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const microMenu = [
    { label: "Manage My Account", icon: "fa-regular fa-user", click: onToggle },
    { label: "My Order", icon: "fa-regular fa-user", click: onToggle },
    { label: "My Cancellations", icon: "fa-regular fa-user", click: onToggle },
    { label: "My Reviews", icon: "fa-regular fa-user", click: onToggle },
    { label: "Logout", icon: "fa-regular fa-user", click: sigedOut },
  ];

  return (
    <section className="sticky top-0 bg-white z-40">
      <div className="w-full border-b-2 border-gray-200 bg-white pt-2">
        <div className="md:w-9/10 lg:w-5/6 flex m-auto justify-between gap-6 max-sm:gap-0 items-center">
          <div className="maxw-1/5 ml-1 ">
            <h1 className="font-bold text-xl">Exclusive</h1>
          </div>
          <div className="flex justify-between max-sm:gap-8 items-center w-full">
            <DeskNav />
            <div className="flex max-sm:justify-center justify-end gap-4 max-sm:gap-8 items-center w-full">
              <div className="">
                <Input
                  id="search"
                  type={"text"}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  plhldr="what are you looking for"
                  // wdt={"w-3/5"}
                  check={<i className="fa fa-magnifying-glass"></i>}
                />
              </div>
              <div className="max-md:hidden">
                <NavIcons closeNav={toggleNav} miniMenu={onToggle} />
              </div>
            </div>
          </div>
          <div
            className="hidden max-md:flex cursor-pointer mr-4"
            onClick={toggleNav}
          >
            <i className={`fa fa-xl ${nav ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </div>
      {nav && (
        <div className="md:hidden flex flex-col gap-2 items-center justify-center text-center my-4 transition-all delay-300 duration-500 ease-in-out">
          <MobileNav closeNav={toggleNav} />
          <NavIcons closeNav={toggleNav} miniMenu={onToggle} />
        </div>
      )}
      <div className="flex flex-col max-md:items-center md:items-end md:w-9/10 lg:w-5/6 m-auto">
        <div>
          {toggle &&
            microMenu.map((menu) => (
              <div className="flex items-center gap-1">
                <l className={menu.icon}></l>
                <NavLink onClick={menu.click}>{menu.label}</NavLink>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
