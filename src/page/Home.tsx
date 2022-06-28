import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Logo from "../assets/gjj_logo.jpeg";
import { Form } from "../components/form/Form";
import { Header } from "../components/layout/header/Header";
import { UserTable } from "../components/users/UserTable";
import { authService, dbService } from "../firebase";
import { IUser } from "../types";

export const Home = () => {
  const [list, setList] = useState<IUser[]>([]);
  useEffect(() => {
    const q = query(collection(dbService, "users"));

    onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));

      setList(list as any);
    });
  }, []);
  return (
    <>
      <Header />
      <Form />
      <UserTable list={list} />
    </>
  );
};
