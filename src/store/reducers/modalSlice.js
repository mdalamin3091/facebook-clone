import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "pokemon",
  initialState: {
    openModal: false,
  },
  reducers: {
    modalOpen: (state, { payload }) => {
      state.openModal = payload;
    },
  },
});

export const { modalOpen } = modalSlice.actions;
export default modalSlice.reducer;
