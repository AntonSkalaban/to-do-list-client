import { createSlice } from "@reduxjs/toolkit";

export const TaskViewerSlice = createSlice({
  name: "taskViewer",
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

export const { openTaskViewer, closeTaskViewer } = TaskViewerSlice.actions;

export default TaskViewerSlice.reducer;
