import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import { Login } from "./page/Login";

export const Router = () => {
  const isLogin = sessionStorage.getItem("isLogin");

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {isLogin === "true" ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
