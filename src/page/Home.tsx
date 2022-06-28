import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";

import { Form } from "../components/form/Form";
import { Header } from "../components/layout/header/Header";
import { UserTable } from "../components/users/UserTable";
import { dbService } from "../firebase";
import { useAppDispatch } from "../hooks/hooks";
import { setUser } from "../redux/thunk/userAction";

export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const q = query(collection(dbService, "users"));

    onSnapshot(q, (snapshot) => {
      const list = snapshot.docs
        .map((doc) => ({
          ...doc.data(),
        }))
        .sort(
          (a, b) =>
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        );

      dispatch(setUser(list as any));
    });
  }, []);
  return (
    <>
      <Header />
      <Form />
      <UserTable />
    </>
  );
};
