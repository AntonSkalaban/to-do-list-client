import React from "react";
import { DeleteTask, TextEditor, ToggleStatus, UpdateTask } from "features";
import { Box } from "@mui/material";

export const TaskEditor = () => {
  return (
    <Box sx={{ height: "calc(100vh - 200px)" }}>
      <Box sx={{ height: "100%", overflowY: "scroll" }}>
        <TextEditor fieldName="title" />
        <TextEditor fieldName="description" />
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          left: 0,
          bottom: 10,
          padding: "0 24px 10px 24px",
        }}
      >
        <ToggleStatus />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <UpdateTask />
          <DeleteTask />
        </Box>
      </Box>
    </Box>
  );
};
