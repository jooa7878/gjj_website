import { signInWithEmailAndPassword } from "firebase/auth";
import { Dispatch } from "redux";
import Swal from "sweetalert2";
import { authService } from "../../firebase";
import { SET_LOGIN } from "../slice/userSlice";

export const login = (id: string, pw: string) => async (dispatch: Dispatch) => {
  try {
    await signInWithEmailAndPassword(authService, id, pw);

    dispatch(SET_LOGIN({ isLogin: true }));
    Swal.fire({
      icon: "success",
      text: "로그인 성공!",
      timer: 2000,
    }).then(() => {
      window.location.replace("/");
    });
  } catch ({ message }) {
    alert(message);
  }
};
