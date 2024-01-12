import { configureStore } from "@reduxjs/toolkit";
import { taskAPI } from "shared/api";
import { OpenTaskDetailsSlice } from "./slice";
import { OpenTaskToggleSlice } from "./slice";

export const store = configureStore({
  reducer: {
    openTaskDetails: OpenTaskDetailsSlice,
    openTaskToggle: OpenTaskToggleSlice,
    [taskAPI.reducerPath]: taskAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(taskAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
