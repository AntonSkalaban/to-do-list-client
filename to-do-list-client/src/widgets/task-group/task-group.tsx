import React from "react";
import { Task, TaskStatus } from "shared/type/type";
import { TasksRow } from "entities";
import { Container, List, Typography } from "@mui/material";

interface TasksGroupProps {
  status: TaskStatus;
  tasks: Task[];
}

export const TasksGroup: React.FC<TasksGroupProps> = ({ status, tasks }) => {
  return (
    <Container>
      <Typography fontWeight={600}>{status}</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {tasks.map((task) => {
          return <TasksRow key={task._id} task={task} />;
        })}
      </List>
    </Container>
  );
};
