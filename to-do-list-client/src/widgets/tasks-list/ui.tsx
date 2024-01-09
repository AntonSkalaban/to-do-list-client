import React from "react";
import { taskAPI } from "shared/api";
import { TasksRow } from "entities/task-row/ui";
import { AddTask } from "features/add-task/ui";
import { Container, List } from "@mui/material";

export const TasksList = () => {
  const { data: tasks, isError, isFetching } = taskAPI.useGetTasksQuery();

  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <Container>
      <AddTask />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {tasks?.map((task) => {
          return <TasksRow key={task._id} task={task} />;
        })}
      </List>
    </Container>
  );
};
