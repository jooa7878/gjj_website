import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useAppSelector } from "./hooks/hooks";
import { Home } from "./page/Home";
import { Login } from "./page/Login";

export const Router = () => {
  const isLogin = useAppSelector((state) => state.users.user.isLogin);

  console.log(isLogin);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {isLogin ? (
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
