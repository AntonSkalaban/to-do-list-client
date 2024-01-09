import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Task } from "shared/type/type";
import { ToggleStatus } from "features/toggle-status";

interface TasksRowProps {
  task: Task;
}
export const TasksRow: React.FC<TasksRowProps> = ({ task }) => {
  return (
    <ListItem
      key={task._id}
      sx={{
        backgroundColor: task.status === "done" ? "#11bf6a" : "#f5f5f5",
      }}
    >
      <ListItemText primary={task.title} />

      <ToggleStatus task={task} />

      <IconButton edge="end" aria-label="comments">
        <EditIcon />
      </IconButton>
    </ListItem>
  );
};
