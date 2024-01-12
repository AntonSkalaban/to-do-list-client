import React from "react";
import { statuses } from "shared/type/type";
import { Box, Button, ButtonGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateOpenTaskDetails } from "shared/store/slice";
import { getOpenTaskDetails } from "shared/store/selectors/selector";

export const ToggleStatus = () => {
  const dispatch = useDispatch();

  const { status: curStatus } = useSelector(getOpenTaskDetails);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(updateOpenTaskDetails({ status: e.currentTarget.value }));
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
