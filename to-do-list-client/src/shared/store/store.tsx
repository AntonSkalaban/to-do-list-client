import { configureStore } from "@reduxjs/toolkit";
import { taskAPI } from "shared/api";
import { TaskEditorSlice, TaskViewerSlice } from "./slice";

export const store = configureStore({
  reducer: {
    taskEditor: TaskEditorSlice,
    taskViewer: TaskViewerSlice,
    [taskAPI.reducerPath]: taskAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(taskAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
