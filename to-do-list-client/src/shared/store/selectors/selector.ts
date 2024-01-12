import { RootState } from "../store";

export const getOpenTaskDetails = (state: RootState) => state.openTaskDetails;

export const getIsTaskViewedOpen = (state: RootState) =>
  state.openTaskToggle.isOpen;
