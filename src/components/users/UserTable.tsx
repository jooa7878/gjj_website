import { format } from "date-fns";
import { useEffect, useState } from "react";
import { IUser } from "../../types";

const dummayData = [
  {
    name: "안상혁",
    dueDate: "2022-06-30",
  },
  {
    name: "선진호",
    dueDate: "2022-05-31",
  },
  {
    name: "박찬휘",
    dueDate: "2023-06-30",
  },
  {
    name: "이준수",
    dueDate: "2022-08-30",
  },
  {
    name: "한태성",
    dueDate: "2022-03-30",
  },
  {
    name: "박준성",
    dueDate: "2022-07-01",
  },
];

export const UserTable = () => {
  const [list, setList] = useState<IUser[]>([]);
  useEffect(() => {
    const res = dummayData.sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );
    setList(res);
  }, []);
  const isDue = (date: string) => {
    const today = format(new Date(), "yyyy-MM-dd");
    return today > date;
  };

  return (
    <div className="p-[50px] w-full flex justify-center">
      <div className="w-full max-w-[1194px] flex justify-center items-center">
        <ul className="border-[1px] border-mono-4">
          <li className="w-[600px] border-b-[1px] border-b-mono-4">
            <div className=" flex justify-between items-center px-10 py-5">
              <span>이름</span>
              <span>등록기한</span>
            </div>
          </li>
          {list.map((value, idx) => (
            <li
              className="w-[600px] border-b-[1px] border-b-mono-4 last:border-b-0"
              key={idx}
            >
              <div className=" flex justify-between items-center px-10 py-5">
                <span>{value.name}</span>
                {isDue(value.dueDate) ? (
                  <span className="text-red-600">{value.dueDate}</span>
                ) : (
                  <span className="">{value.dueDate}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
