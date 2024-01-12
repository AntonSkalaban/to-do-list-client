import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  getIsTaskViewedOpen,
  getOpenTaskDetails,
} from "shared/store/selectors/selector";
import { Container, Typography, useMediaQuery } from "@mui/material";
import { OpenTask } from "entities";

export const TasksDetails = () => {
  const matches = useMediaQuery("(min-width:800px)");

  const { _id } = useSelector(getOpenTaskDetails);

  const isOpen = useSelector(getIsTaskViewedOpen);

  const isWindowOpen = matches || (!matches && isOpen);
  return (
    <>
      {isWindowOpen && (
        <Container
          sx={{
            minWidth: matches ? 400 : "100%",
            height: "100vh",
            border: "1px solid #26262614",
            position: matches ? "relative" : "absolute",
            left: 0,
            top: 0,
            zIndex: 4,
            backgroundColor: "#fff",
          }}
        >
          {_id ? <OpenTask /> : <Typography>Open task</Typography>}
        </Container>
      )}
    </>
  );
};
