import React from "react";
import { Add } from "@mui/icons-material";
import { taskAPI } from "shared/api";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { getEditableTask } from "shared/store/selectors";

export const UpdateTask = () => {
  const [updateTask] = taskAPI.useUpdateTaskMutation();

  const task = useSelector(getEditableTask);

  const handleClick = () => {
    updateTask(task);
  };

  return (
    <IconButton onClick={handleClick} size="large">
      <Add />
    </IconButton>
  );
};
