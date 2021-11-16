import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/admin/dashboard";
import PrivateRoute from "./routers/protextRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
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
