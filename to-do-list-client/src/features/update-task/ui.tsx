import React from "react";
import { Add } from "@mui/icons-material";
import { taskAPI } from "shared/api";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { getOpenTaskDetails } from "shared/store/selectors/selector";

export const UpdateTask = () => {
  const [updateTask] = taskAPI.useUpdateTaskMutation();

  const task = useSelector(getOpenTaskDetails);

  const handleClick = () => {
    updateTask(task);
  };

  return (
    <IconButton onClick={handleClick} size="large">
      <Add />
    </IconButton>
  );
};
