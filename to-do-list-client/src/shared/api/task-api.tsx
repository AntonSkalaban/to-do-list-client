import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Task } from "shared/type/type";

export const taskAPI = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ["Task"],
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => {
        return {
          url: `/tasks`,
        };
      },
      providesTags: () => [{ type: "Task", id: "ALL" }],

      forceRefetch() {
        return true;
      },
    }),
    getTask: build.query<Task, string>({
      query: (id) => "/task/" + id,
    }),
    addTask: build.mutation<Task, Task>({
      query: (task) => ({
        url: `/tasks`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: [{ type: "Task", id: "ALL" }],
    }),
    updateTask: build.mutation<Task, Task>({
      query: (task) => ({
        url: `/tasks/${task._id}`,
        method: "PUT",
        body: task,
      }),
      invalidatesTags: [{ type: "Task", id: "ALL" }],
    }),
  }),
});
