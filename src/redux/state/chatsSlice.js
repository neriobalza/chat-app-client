import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "x person",
    id: "",
  },
];

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    createChat: (state, actions) => {
      state.chats.push(actions.payload);
    },
    deleteChat: (state, actions) => {},
  },
});

export const { createChat, deleteChat } = chatsSlice.actions;
export default chatsSlice.reducer;
