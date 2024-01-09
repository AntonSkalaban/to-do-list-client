import React from "react";
import { Box, Input } from "@mui/material";
import { taskAPI } from "shared/api";

export const AddTask = () => {
  const [addTask] = taskAPI.useAddTaskMutation();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(e.currentTarget.value);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <Input
        sx={{
          width: "100%",
        }}
        placeholder="+ Add Task"
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};
