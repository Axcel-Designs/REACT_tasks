import { Link, Outlet, useLocation } from "react-router-dom";
import PersonalInfo from "../components/user/PersonalInfo";
import { useState } from "react";
import AddAddress from "../components/user/AddAddress";
import AddAddressFill from "../components/user/AddAddressFill";
import SuccessRegister from "./SuccessRegister";
import { useAuth } from "../context/AuthProvider";
import { useFormik } from "formik";
import userFormSchema from "../utils/userFormSchema";

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

  // function handleSubmit(e) {
  //   e.preventDefault();
  // currentPage === "addAddressFill" && setCurrentPage("successRegister");
  // }

  const {
    fullName,
    setFullName,
    gender,
    setGender,
    cntryCd,
    setCntryCd,
    telphone,
    setTelphone,
    birthday,
    setBirthday,
    address,
    setAddress,
    street,
    setStreet,
    apartment,
    setapartment,
    city,
    setCity,
    state,
    setState,
    zipCde,
    setZipCde,
  } = useAuth();

  const formik = useFormik({
    initialValues: {
      fullName: fullName || "",
      gender: gender || "",
      cntryCd: cntryCd || "",
      telphone: telphone || "",
      birthday: birthday || "",
      address: address || "",
      street: street || "",
      apartment: apartment || "",
      city: city || "",
      state: state || "",
      zipCde: zipCde || "",
    },
    validationSchema: userFormSchema,
    onSubmit: (values) => {
      setCurrentPage("successRegister");
      setFullName(values.fullName);
      setGender(values.gender);
      setCntryCd(values.cntryCd);
      setTelphone(values.telphone);
      setBirthday(values.birthday);
      setAddress(values.address);
      setStreet(values.street);
      setapartment(values.apartment);
      setCity(values.city);
      setState(values.state);
      setZipCde(values.zipCde);
    },
  });

  return (
    <>
      {!hideRender ? (
        <main className="flex justify-around items-center w-full h-svh">
          <section className="shadow-xl/30 p-6 rounded-lg w-7/8 md:w-4/5 min-h-[400px] h-fit lg:w-2/5 bg-white">
            <form
              className="text-gray-600"
              autoComplete="on"
              onSubmit={formik.handleSubmit}
            >
              <PageComponent gotoPage={changePage} formik={formik} />
            </form>
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
