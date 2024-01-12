import React from "react";
import { Container } from "@mui/material";
import { TasksList, TaskViewer } from "widgets";
import { AddTask } from "features";
import "./App.css";

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
      <TaskViewer />
    </Container>
  );
};
