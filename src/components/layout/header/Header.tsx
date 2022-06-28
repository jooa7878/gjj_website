import { Link } from "react-router-dom";
import Logo from "../../../assets/gjj_logo.jpeg";

export const Header = () => {
  return (
    <div className="w-full flex justify-center border-b-[1px] border-mono-2">
      <div className="w-full max-w-[1194px] flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[100px] h-[100px]" />
        </Link>
        <Link to="/login">
          <button className="bg-gjj-blue text-white rounded-lg py-3 px-5">
            로그인
          </button>
        </Link>
      </div>
    </div>
  );
};
