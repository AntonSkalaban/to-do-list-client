import { RootState } from "../store";

export const getIsTaskViewerOpen = (state: RootState) =>
  state.taskViewer.isOpen;
