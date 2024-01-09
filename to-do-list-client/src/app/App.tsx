import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import { AddTask } from "features/add-task/ui";
import { TasksList } from "widgets/tasks-list/ui";

export const App = () => {
  return (
    <Container maxWidth="sm">
      <AddTask></AddTask>
      <TasksList />
    </Container>
  );
};
