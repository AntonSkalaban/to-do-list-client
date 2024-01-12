import React from "react";
import { Task } from "shared/type/type";
import { ListItem, ListItemText } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { openTaskViewer, saveOpenTask } from "shared/store/slice";
import { getOpenTaskDetails } from "shared/store/selectors/selector";

interface TasksRowProps {
  task: Task;
}
export const TasksRow: React.FC<TasksRowProps> = ({ task }) => {
  const openTask = useSelector(getOpenTaskDetails);
  const dispatch = useDispatch();

  return (
    <ListItem
      key={task._id}
      sx={{
        backgroundColor:
          task._id === openTask._id ? "rgba(181, 199, 253, 0.1)" : "#fff",
      }}
      onClick={() => {
        dispatch(saveOpenTask(task));
        dispatch(openTaskViewer());
      }}
    >
      <ListItemText primary={task.title} />
    </ListItem>
  );
};
