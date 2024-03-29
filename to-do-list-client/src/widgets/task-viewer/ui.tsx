import React from "react";
import { useSelector } from "react-redux";
import { getEditableTask, getIsTaskViewerOpen } from "shared/store/selectors";
import { TaskEditor } from "entities";
import { CloseTask } from "features";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

export const TaskViewer = () => {
  const matches = useMediaQuery("(min-width:800px)");

  const { _id } = useSelector(getEditableTask);

  const isOpen = useSelector(getIsTaskViewerOpen);

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
          {_id ? (
            <>
              {!matches && (
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <CloseTask />
                </Box>
              )}
              <TaskEditor />
            </>
          ) : (
            <Typography sx={{ textAlign: "center" }}>
              Сlick on the task to read and change
            </Typography>
          )}
        </Container>
      )}
    </>
  );
};
