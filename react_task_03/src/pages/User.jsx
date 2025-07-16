import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { personalInfoSchema, addressSchema } from "../utils/userFormSchema";
import PersonalInfo from "../components/user/PersonalInfo";
import AddAddress from "../components/user/AddAddress";
import AddAddressFill from "../components/user/AddAddressFill";
import SuccessRegister from "./SuccessRegister";
import { useAuth } from "../context/AuthProvider";

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
      state:state|| "",
      zipCde:zipCde|| "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema:
      currentPage === "personalInfo" ? personalInfoSchema : addressSchema,
    onSubmit: (values) => {
      console.log("Error Fields:", Object.keys(formik.errors));
      if (currentPage === "personalInfo") {
        console.log("Going to addAddress");
        setFullName(values.fullName);
        setGender(values.gender);
        setCntryCd(values.cntryCd);
        setTelphone(values.telphone);
        setBirthday(values.birthday);
        setCurrentPage("addAddress");
      } else if (currentPage === "addAddressFill") {
        console.log("Final values", values);
        setAddress(values.address);
        setStreet(values.street);
        setapartment(values.apartment);
        setCity(values.city);
        setState(values.state);
        setZipCde(values.zipCde);
        setCurrentPage("successRegister");
      }
    },
  });
  function changePage(pageName) {
    setCurrentPage(pageName);
  }

  const PageComponent = pages[currentPage] || PersonalInfo;

  return (
    <>
      {!hideRender ? (
        <main className="flex justify-around items-center w-full h-svh">
          <section className="shadow-xl/30 p-6 rounded-xl w-7/8 sm:w-3/5 md:w-4/7 lg:w-2/5 min-h-[400px] h-fit bg-white">
            <PageComponent gotoPage={changePage} formik={formik} />
            {/* <PageComponent formik={formik} /> */}
          </section>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
