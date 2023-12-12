import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App/App";
import { ErrorPage } from "../pages/Error/error";

export const Ways = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
