import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

const initialState = {
  userList: [{ name: "", dueDate: "" }],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    SET_USER: (state, action: PayloadAction<IUser[]>) => {
      state.userList = action.payload;
    },
  },
});

export const { SET_USER } = userSlice.actions;

// export const { SET_USER, LOGOUT } = sellerSlice.actions;

export default userSlice.reducer;
