import ToDoItem from "../components/ToDoItem";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { removeItem, toggleItem, updateItem } from "../actions/todos";

export interface IToDoItemProps {
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
  updateItem: (id: string, newValue: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IToDoItemProps => {
  return {
    toggleItem: (id: string) => dispatch(toggleItem(id)),
    removeItem: (id: string) => dispatch(removeItem(id)),
    updateItem: (id: string, newValue: string) =>
      dispatch(updateItem(id, newValue))
  };
};

const ToDoItemContainer = connect(
  null,
  mapDispatchToProps
)(ToDoItem);

export default ToDoItemContainer;
