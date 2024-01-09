import { configureStore } from "@reduxjs/toolkit";
import { taskAPI } from "shared/api";

export const store = configureStore({
  reducer: {
    [taskAPI.reducerPath]: taskAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(taskAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
