import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/gjj_logo.jpeg";

export const Header = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    sessionStorage.removeItem("persist:root");
    window.location.replace("/");
  };
  return (
    <div className="w-full flex justify-center border-b-[1px] border-mono-2">
      <div className="w-full max-w-[1194px] flex justify-between items-center">
        <Link to="/home">
          <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
        </Link>

        <button
          className="bg-gjj-blue text-white rounded-lg py-3 px-5"
          onClick={onLogout}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};
