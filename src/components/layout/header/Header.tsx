import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/gjj_logo.jpeg";

export const Header = () => {
  const onLogout = () => {
    sessionStorage.removeItem("isLogin");
    window.location.replace("https://jooa7878.github.io/gjj_website");
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
