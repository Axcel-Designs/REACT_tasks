import { Link, Outlet, useLocation } from "react-router-dom";
import PersonalInfo from "../components/user/PersonalInfo";
import { useState } from "react";
import AddAddress from "../components/user/AddAddress";
import AddAddressFill from "../components/user/AddAddressFill";
import SuccessRegister from "./SuccessRegister";

const pages = {
  personalInfo: PersonalInfo,
  addAddress: AddAddress,
  addAddressFill: AddAddressFill,
  successRegister: SuccessRegister,
};

export default function User() {
  const location = useLocation();
  const hideRender =
    location.pathname.startsWith("/user") && location.pathname !== "/user";

  const [currentPage, setCurrentPage] = useState("personalInfo");
  const PageComponent = pages[currentPage] || PersonalInfo;

  function changePage(pageName) {
    setCurrentPage(pageName);
  }

  function handleSubmit(e) {
    e.preventDefault();
    currentPage === "addAddressFill" && setCurrentPage("successRegister");
  }

  return (
    <>
      {!hideRender ? (
        <main className="flex justify-around items-center w-full h-svh">
          <section className="shadow-xl/30 p-6 rounded-lg w-7/8 md:w-4/5 min-h-[400px] h-fit lg:w-2/5 bg-white">
            <form
              className="text-gray-600"
              autoComplete="on"
              onSubmit={handleSubmit}
            >
              <PageComponent gotoPage={changePage} />
            </form>
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
