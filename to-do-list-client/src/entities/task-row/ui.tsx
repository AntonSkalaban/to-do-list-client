import React from "react";
import { useSelector } from "react-redux";
import { getEditableTask } from "shared/store/selectors";
import { useAction } from "shared/hooks";
import { Task } from "shared/type/type";
import { ListItem, ListItemText } from "@mui/material";
interface TasksRowProps {
  task: Task;
}
export const TasksRow: React.FC<TasksRowProps> = ({ task }) => {
  const { addToEditor, openTaskViewer } = useAction();

  const { _id: editableTaskId } = useSelector(getEditableTask);

  const hanldeClick = () => {
    addToEditor(task);
    openTaskViewer();
  };

  return (
    <ListItem
      key={task._id}
      sx={{
        backgroundColor:
          task._id === editableTaskId ? "rgba(181, 199, 253, 0.1)" : "#fff",
      }}
      onClick={hanldeClick}
    >
      <ListItemText primary={task.title} />
    </ListItem>
  );
};
