import AddItemForm from "../components/AddItemForm";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addToDoItem } from "../actions/todos";

interface IAddItemProps {
  addToDoItem: (value: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IAddItemProps => ({
  addToDoItem: (value: string) => dispatch(addToDoItem(value))
});

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItemForm);

export default AddItemContainer;
