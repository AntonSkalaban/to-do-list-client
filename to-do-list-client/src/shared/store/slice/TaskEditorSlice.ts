import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "shared/type/type";

export const TaskEditorSlice = createSlice({
  name: "taskEditor",
  initialState: {} as Task,
  reducers: {
    addToEditor: (state, { payload }: PayloadAction<Task>) => {
      return (state = payload);
    },
    updateEditableTask: (
      state,
      { payload }: PayloadAction<Record<string, string>>
    ) => {
      return { ...state, ...payload };
    },
  },
});

export const { addToEditor, updateEditableTask } = TaskEditorSlice.actions;

export default TaskEditorSlice.reducer;
