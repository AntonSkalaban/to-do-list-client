import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { taskAPI } from "shared/api";
import { Task } from "shared/type/type";

const statuses = ["done", "pending", "in progress"] as const;
export type TaskStatus = (typeof statuses)[number];

export const TasksList = () => {
  const { data: tasks, isError, isFetching } = taskAPI.useGetTasksQuery();

  const [updateTask] = taskAPI.useUpdateTaskMutation();

  const hanldeClick = (task: Task, status: TaskStatus) => {
    updateTask({ ...task, status });
  };

  if (isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {tasks?.map((task) => {
        const labelId = `checkbox-list-label-${task._id}`;

        return (
          <ListItem
            key={task._id}
            sx={{
              backgroundColor: task.status === "done" ? "#11bf6a" : "#f5f5f5",
            }}
          >
            <ListItemText id={labelId} primary={task.title} />

            <Select
              value={task.status}
              label="status"
              size="small"
              style={{ fontSize: "14px", height: "22px" }}
            >
              {statuses.map((status) => {
                return (
                  <MenuItem
                    key={status}
                    value={status}
                    onClick={() => hanldeClick(task, status)}
                  >
                    {status}
                  </MenuItem>
                );
              })}
            </Select>

            <IconButton edge="end" aria-label="comments">
              <EditIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};
