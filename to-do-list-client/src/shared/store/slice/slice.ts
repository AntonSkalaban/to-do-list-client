import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "shared/type/type";

export const OpenTaskDetailsSlice = createSlice({
  name: "openTaskDetails",
  initialState: {} as Task,
  reducers: {
    saveOpenTask: (state, { payload }: PayloadAction<Task>) => {
      return (state = payload);
    },
    updateOpenTaskDetails: (
      state,
      { payload }: PayloadAction<Record<string, string>>
    ) => {
      return { ...state, ...payload };
    },
  },
});

export const { saveOpenTask, updateOpenTaskDetails } =
  OpenTaskDetailsSlice.actions;

export default OpenTaskDetailsSlice.reducer;
