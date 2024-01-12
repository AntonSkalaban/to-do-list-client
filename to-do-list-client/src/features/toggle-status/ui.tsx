import React from "react";
import { useSelector } from "react-redux";
import { getEditableTask } from "shared/store/selectors";
import { useAction } from "shared/hooks";
import { statuses } from "shared/type/type";
import { Box, Button, ButtonGroup } from "@mui/material";

export const ToggleStatus = () => {
  const { updateEditableTask } = useAction();

  const { status: curStatus } = useSelector(getEditableTask);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    updateEditableTask({ status: e.currentTarget.value });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "15px",
      }}
    >
      <ButtonGroup
        size="small"
        aria-label="small button group"
        sx={{ width: "100%" }}
      >
        {statuses.map((status) => {
          return (
            <Button
              key={status}
              value={status}
              sx={{
                width: "33%",
                borderColor: "gray",
                color: status === curStatus ? "green" : "gray",
              }}
              onClick={handleClick}
            >
              {status}
            </Button>
          );
        })}
      </ButtonGroup>
    </Box>
  );
};
