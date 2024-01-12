import { createSlice } from "@reduxjs/toolkit";

export const OpenTaskToggleSlice = createSlice({
  name: "openTaskToggle",
  initialState: { isOpen: false },
  reducers: {
    openTaskViewer: (state) => {
      state.isOpen = true;
    },
    closeTaskViewer: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openTaskViewer, closeTaskViewer } = OpenTaskToggleSlice.actions;

export default OpenTaskToggleSlice.reducer;
