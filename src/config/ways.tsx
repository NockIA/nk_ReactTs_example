import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/home";
import ErrorPage from "../views/error/error";
import Login from "../views/auth/login/login";
import PrivateRoute from "./private-route";
import Register from "../views/auth/register/register";

const Ways: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ### Routes non protégées ### */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* ### Routes protégées ### */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* ### Routes Not Found ### */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;
