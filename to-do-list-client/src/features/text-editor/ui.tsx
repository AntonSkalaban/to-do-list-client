import React from "react";
import { TextField, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { useAction } from "shared/hooks";
import { getEditableTask } from "shared/store/selectors";

const CustomTextField = styled(TextField)({
  width: "100%",
  padding: 0,
  "& .MuiInputBase-multiline": {
    padding: 0,
  },
  "& fieldset": {
    border: "none",
  },
});

interface TextEditorProps {
  fieldName: "title" | "description";
}
export const TextEditor: React.FC<TextEditorProps> = ({ fieldName }) => {
  const { updateEditTask } = useAction();

  const task = useSelector(getEditableTask);

  const isTitleField = fieldName === "title";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateEditTask({ [fieldName]: e.target.value });
  };

  return (
    <CustomTextField
      key={task._id}
      name={fieldName}
      inputProps={{
        style: {
          padding: 5,
          fontWeight: isTitleField ? 700 : 200,
        },
      }}
      placeholder="Description"
      value={task[fieldName]}
      multiline={!isTitleField}
      onChange={handleChange}
    />
  );
};
