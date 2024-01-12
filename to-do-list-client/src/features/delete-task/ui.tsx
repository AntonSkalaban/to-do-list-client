import React from "react";
import { useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import { taskAPI } from "shared/api";
import { IconButton } from "@mui/material";
import { getEditableTask } from "shared/store/selectors";

export const DeleteTask = () => {
  const [updateTask] = taskAPI.useUpdateTaskMutation();

  const { _id } = useSelector(getEditableTask);

  const handleClick = () => {};

  return (
    <IconButton onClick={handleClick} size="large">
      <Delete />
    </IconButton>
  );
};
