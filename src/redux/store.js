import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./state/userSlice";
import chatsSlice from "./state/chatsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    chats: chatsSlice,
  },
});
