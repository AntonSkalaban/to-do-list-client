import React from "react";
import { Container } from "@mui/material";
import { TasksList } from "widgets/tasks-list";
import { TasksDetails } from "shared/store";
import "./App.css";
import { AddTask } from "features";

export const App = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <Container>
        <AddTask />

        <TasksList />
      </Container>
      <TasksDetails />
    </Container>
  );
};
