import React from "react";
import { taskAPI } from "shared/api";
import { Container } from "@mui/material";
import { TaskStatus } from "shared/type/type";
import { TasksGroup } from "widgets/task-group/task-group";

export const TasksList = () => {
  const {
    data: groupedTasks,
    isError,
    isFetching,
  } = taskAPI.useGetTasksQuery();

  if (isFetching) return <p>Loading...</p>;
  if (isError || !groupedTasks) return <p>Error...</p>;

  return (
    <Container>
      {Object.keys(groupedTasks).map((status) => {
        return (
          <TasksGroup
            key={status}
            status={status as TaskStatus}
            tasks={groupedTasks[status]}
          />
        );
      })}
    </Container>
  );
};
