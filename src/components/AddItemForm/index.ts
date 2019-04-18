import AddItemForm from "./AddItemForm";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTaskItem } from "../../actions";

export interface IAddItemContainerProps {
  addTaskItem: (taskName: string, hasDueDate: boolean, dueDate: Date) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IAddItemContainerProps => ({
  addTaskItem: (taskName: string, hasDueDate: boolean, dueDate: Date) =>
    dispatch(addTaskItem(taskName, hasDueDate, dueDate))
});

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItemForm);

export default AddItemContainer;
