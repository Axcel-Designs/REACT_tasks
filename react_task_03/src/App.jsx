import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";
import SuccessRegister from "./pages/SucessRegister";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import ProtectedRoute from "./context/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterLogin />}>
          <Route path="user" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>}>
            <Route path="successfulregistration" element={<SuccessRegister />}  />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
