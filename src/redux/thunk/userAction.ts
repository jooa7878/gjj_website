import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Dispatch } from "redux";
import Swal from "sweetalert2";
import { authService } from "../../firebase";
import { IUser } from "../../types";
import { SET_USER } from "../slice/userSlice";

export const login = async (id: string, pw: string) => {
  try {
    await signInWithEmailAndPassword(authService, id, pw);

    sessionStorage.setItem("isLogin", "true");
    Swal.fire({
      icon: "success",
      text: "로그인 성공!",
      timer: 2000,
    }).then(() => {
      window.location.replace(
        `https://jooa7878.github.io${process.env.PUBLIC_URL}/`
      );
    });
  } catch ({ message }) {
    alert(message);
  }
};

export const setUser = (users: IUser[]) => (dispatch: Dispatch) => {
  dispatch(SET_USER(users));
};
