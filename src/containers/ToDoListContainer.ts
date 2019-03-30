import ToDoList from "../components/ToDoList";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { initToDoList } from "../actions/todos";
import { IReduxStore, IToDoItem } from "../model/store";

export interface IToDoListDispatch {
  initList: () => void;
}

export interface IToDoListProps {
  toDoList: IToDoItem[];
  filterType: string;
}

const mapDispatchToProps = (dispatch: Dispatch): IToDoListDispatch => ({
  initList: () => dispatch(initToDoList())
});

const mapStateToProps = (store: IReduxStore): IToDoListProps => {
  const list = Object.keys(store.toDos.toDoList)
    .map(key => store.toDos.toDoList[key])
    .filter(item => {
      if (store.toDos.filterType === "all") {
        return true;
      } else if (store.toDos.filterType === "active") {
        return !item.isCompleted;
      } else if (store.toDos.filterType === "completed") {
        return item.isCompleted;
      }

      return false;
    });

  return {
    toDoList: list,
    filterType: store.toDos.filterType
  };
};

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;
