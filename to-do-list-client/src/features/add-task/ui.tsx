import React from "react";
import { Box, Input } from "@mui/material";

export const AddTask = () => {
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
      />
    </Box>
  );
};
