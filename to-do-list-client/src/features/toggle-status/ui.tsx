import React from "react";
import { taskAPI } from "shared/api";
import { Task, TaskStatus, statuses } from "shared/type/type";
import { MenuItem, Select } from "@mui/material";

interface ToggleStatusProps {
  task: Task;
}

export const ToggleStatus: React.FC<ToggleStatusProps> = ({ task }) => {
  const [updateTask] = taskAPI.useUpdateTaskMutation();

  const hanldeClick = (task: Task, status: TaskStatus) => {
    updateTask({ ...task, status });
  };

  return (
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
  );
};
