import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../configStore";

interface IUserProps {
  name: string;
}

const initialState: IUserProps = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { change } = userSlice.actions;

export const selectUser = (state: RootState) => state.users.name;

export default userSlice.reducer;
