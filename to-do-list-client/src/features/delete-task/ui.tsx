import React from "react";
import { useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import { taskAPI } from "shared/api";
import { IconButton } from "@mui/material";
import { getOpenTaskDetails } from "shared/store/selectors/selector";

export const DeleteTask = () => {
  const [updateTask] = taskAPI.useUpdateTaskMutation();

  const task = useSelector(getOpenTaskDetails);

  const handleClick = () => {
    updateTask(task);
  };

  return (
    <IconButton onClick={handleClick} size="large">
      <Delete />
    </IconButton>
  );
};
