import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { groupByStatus } from "shared/helpers";
import { GroupedTasks, Task } from "shared/type/type";

export const taskAPI = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ["Task"],
  endpoints: (build) => ({
    getTasks: build.query<GroupedTasks, void>({
      query: () => {
        return {
          url: `/tasks`,
        };
      },
      transformResponse: (response: Task[]) => {
        return groupByStatus(response);
      },
      providesTags: () => [{ type: "Task", id: "ALL" }],

      forceRefetch() {
        return true;
      },
    }),
    addTask: build.mutation<Task, string>({
      query: (title) => ({
        url: `/tasks`,
        method: "POST",
        body: { title },
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
    deleteTask: build.mutation<Task, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Task", id: "ALL" }],
    }),
  }),
});
