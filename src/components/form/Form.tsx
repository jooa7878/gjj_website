import { format } from "date-fns";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { dbService } from "../../firebase";

export const Form = () => {
  const [userName, setUserName] = useState("");
  const [userDueDate, setUserDueDate] = useState("");

  const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserName(e.currentTarget.value);
  const onUserDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserDueDate(e.currentTarget.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 중복확인, 날짜 여부 확인

    const date = format(new Date(), "yyyy-MM-dd");
    // if (date > userDueDate) {
    //   return Swal.fire({
    //     icon: "error",
    //     text: "미래의 날짜를 입력해주세요",
    //     timer: 2000,
    //   });
    // }

    const ok = window.confirm("관원 등록을 진행하시겠습니까?");
    if (ok) {
      try {
        const q = query(collection(dbService, "users"));
        const userDocs = await getDocs(q);

        const idx = userDocs.docs.findIndex((v) => v.data().name === userName);

        if (idx !== -1) {
          return Swal.fire({
            icon: "error",
            text: "이미 등록된 관원입니다.",
            timer: 2000,
          });
        }
        await addDoc(collection(dbService, "users"), {
          name: userName,
          dueDate: userDueDate,
        });

        return Swal.fire({
          icon: "success",
          text: "입력이 완료되었습니다.",
          timer: 2000,
        });
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  return (
    <div className="p-[50px] w-full flex justify-center">
      <div className="w-full max-w-[1194px] flex justify-center items-center">
        <form onSubmit={onSubmit}>
          <div className="flex space-x-10">
            <input
              type="text"
              placeholder="관원 이름을 등록해주세요"
              onChange={onUserNameChange}
            />
            <div className="space-x-2">
              <span>등록기한</span>
              <input type="date" onChange={onUserDueDateChange} />
            </div>
            <button className="border-[1px] border-gjj-blue text-gjj-blue rounded-[15px] py-[3px] px-5 hover:bg-gjj-blue hover:text-white transition-colors">
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
