import { useEffect } from "react";
import Logo from "../assets/gjj_logo.jpeg";
import { Form } from "../components/form/Form";
import { Header } from "../components/layout/header/Header";
import { UserTable } from "../components/users/UserTable";
import { authService } from "../firebase";

export const Home = () => {
  return (
    <>
      <Header />
      <Form />
      <UserTable />
    </>
  );
};
