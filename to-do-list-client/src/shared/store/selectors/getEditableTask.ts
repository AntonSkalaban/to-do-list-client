import { RootState } from "../store";

export const getEditableTask = (state: RootState) => state.taskEditor;
