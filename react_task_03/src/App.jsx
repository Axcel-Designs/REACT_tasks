import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterLogin from "./pages/RegisterLogin";
import PersonalInfo from "./pages/PersonalInfo";
import AddAdress from "./pages/AddAddress";
import AddAdressFill from "./pages/AddAddressFill";
import SuccessRegister from "./pages/SucessRegister";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <main className="flex justify-around items-center w-full h-screen  bg-amber-100 ">
        <Routes>
          <Route path="/" element={<RegisterLogin />} />
          <Route path="/register" element={<Register />}>
            <Route path="personalinfo" element={<PersonalInfo />} />
            <Route path="address" element={<AddAdress />} />
            <Route path="completeaddress" element={<AddAdressFill />} />
            <Route
              path="successfulregistration"
              element={<SuccessRegister />}
            />
          </Route>
          <Route path="/login" element={<Login />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
