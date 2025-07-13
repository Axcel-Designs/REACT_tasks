import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";
import SuccessRegister from "./pages/SucessRegister";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<RegisterLogin />} >
          <Route path="user" element={<User />} />
            <Route path="user/successfulregistration" element={<SuccessRegister />} />
            <Route path="user/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
