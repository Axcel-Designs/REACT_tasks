import { Route, Routes } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin";
import SuccessRegister from "./pages/SucessRegister";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import ProtectedRoute from "./context/ProtectedRoute";
import UserInfo from "./components/user/userInfo";

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
            <Route path="userinfo" element={<UserInfo />}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
