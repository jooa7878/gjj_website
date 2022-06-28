import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../../types";

const initialState = {
  user: {
    isLogin: false,
  },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    SET_LOGIN: (state, action: PayloadAction<ILogin>) => {
      state.user = action.payload;
    },
  },
});

export const { SET_LOGIN } = userSlice.actions;

// export const { SET_USER, LOGOUT } = sellerSlice.actions;

export default userSlice.reducer;
