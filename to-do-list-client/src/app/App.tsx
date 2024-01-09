import React from "react";
import "./App.css";
import { Container } from "@mui/material";
import { TasksList } from "widgets/tasks-list/ui";

export const App = () => {
  return (
    <Container maxWidth="sm">
      <TasksList />
    </Container>
  );
};
