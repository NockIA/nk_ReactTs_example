import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/home";
import SignIn from "../components/auth/signin";
import SignUp from "../components/auth/signup";
import ErrorPage from "../views/error/error";

const Ways: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;