import { connect } from "react-redux";
import { Dispatch } from "redux";

import { initToDoList } from "../../actions";
import ToDoList from "./ToDoList";

import { IReduxStore, IToDoItem } from "../../model/store";

export interface IToDoListProps {
  toDoList: IToDoItem[];
  filterType: string;
}

const mapStateToProps = (store: IReduxStore): IToDoListProps => {
  const list = Object.keys(store.toDoList)
    .map(key => store.toDoList[key])
    .filter(item => {
      if (store.options.filterType === "all") {
        return true;
      } else if (store.options.filterType === "active") {
        return !item.isCompleted;
      } else if (store.options.filterType === "completed") {
        return item.isCompleted;
      }

      return false;
    });

  return {
    toDoList: list,
    filterType: store.options.filterType
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  initTodoList: () => dispatch(initToDoList())
});

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;
