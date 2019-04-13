import AddItemForm from "./AddItemForm";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addToDoItem } from "../../actions";

export interface IAddItemContainerProps {
  addToDoItem: (value: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IAddItemContainerProps => ({
  addToDoItem: (value: string) => dispatch(addToDoItem(value))
});

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItemForm);

export default AddItemContainer;
