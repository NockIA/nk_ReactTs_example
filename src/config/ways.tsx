import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/home";
import ErrorPage from "../views/error/error";

const Ways: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Ways;