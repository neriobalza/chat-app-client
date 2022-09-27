import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userName: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
