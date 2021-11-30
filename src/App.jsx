import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/admin/dashboard";
import PrivateRoute from "./routers/protextRoute";
import Test from "./pages/admin/test/test";
import ProtectAuth from "./routers/protectAuth";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/tes" element={<PrivateRoute>
        <Test></Test>
      </PrivateRoute>}></Route>
      <Route path="/dashboard" element={<ProtectAuth>
        <Dashboard></Dashboard>
      </ProtectAuth>}></Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      ></Route>
        <Route path="/" element={<Navigate replace to="/login" />}></Route>
    </Routes>
  );
}

export default App;
