import React from "react";
import { TextField, styled } from "@mui/material";
import { updateOpenTaskDetails } from "shared/store/slice";
import { useDispatch, useSelector } from "react-redux";
import { getOpenTaskDetails } from "shared/store/selectors/selector";

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
  const dispatch = useDispatch();

  const task = useSelector(getOpenTaskDetails);

  const isTitleField = fieldName === "title";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateOpenTaskDetails({ [fieldName]: e.target.value }));
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
