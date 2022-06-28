import { format } from "date-fns";

import { useAppSelector } from "../../hooks/hooks";

export const UserTable = () => {
  const list = useAppSelector((state) => state.users.userList);

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
