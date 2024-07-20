import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { userActionPayload, UserState } from "./types";


const initialState: UserState = {
  userData: null,
};



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userData = null;
    },
    setUser: (state, action: PayloadAction<userActionPayload>) => {
      state.userData = action.payload.userData;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
