import React, { useState } from "react";
import { login } from "../redux/thunk/userAction";

export const Login = () => {
  const [userID, setUserID] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onUserIDChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserID(e.currentTarget.value);
  const onUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserPassword(e.currentTarget.value);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login(userID, userPassword);
  };
  return (
    <div className="w-full flex justify-center min-h-screen">
      <div className="w-full max-w-[1194px] flex justify-center items-center">
        <form onSubmit={onSubmit}>
          <div className="flex justify-between items-center">
            <label htmlFor="id" className="w-[100px]">
              아이디
            </label>
            <input
              id="id"
              type="text"
              placeholder="아이디를 입력하세요"
              onChange={onUserIDChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="w-[100px]">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onUserPasswordChange}
            />
          </div>
          <div className="w-full flex justify-center py-10">
            <button className="border-[1px] border-gjj-blue text-gjj-blue rounded-[15px] py-[3px] px-5 hover:bg-gjj-blue hover:text-white transition-colors">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
