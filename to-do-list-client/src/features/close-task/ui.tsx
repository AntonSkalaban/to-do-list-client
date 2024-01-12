import React from "react";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useAction } from "shared/hooks";

export const CloseTask = () => {
  const { closeTaskViewer } = useAction();

  const handleClick = () => {
    closeTaskViewer();
  };

  return (
    <IconButton onClick={handleClick} size="large">
      <Close />
    </IconButton>
  );
};
