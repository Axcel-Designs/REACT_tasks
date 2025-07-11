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
      <main className="flex justify-around items-center w-screen h-screen">
        <Routes>
          <Route path="/" element={<RegisterLogin />} >
            <Route path="user/personalinfo" element={<PersonalInfo />} />
            <Route path="user/address" element={<AddAdress />} />
            <Route path="user/completeaddress" element={<AddAdressFill />} />
            <Route path="user/successfulregistration" element={<SuccessRegister />} />
            <Route path="user/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
