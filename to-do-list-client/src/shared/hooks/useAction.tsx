import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {
  addToEditor,
  updateEditableTask,
  openTaskViewer,
  closeTaskViewer,
} from "shared/store/slice";

const actions = {
  addToEditor,
  updateEditableTask,
  openTaskViewer,
  closeTaskViewer,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
