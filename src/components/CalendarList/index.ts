import { connect } from "react-redux";

import CalendarList from "./CalendarList";

// import { Event } from "react-big-calendar";
import { IReduxStore, IToDoItem } from "../../model/store";

export interface ICalendarProps {
  tasksList: IToDoItem[];
}

const mapStateToProps = (store: IReduxStore): ICalendarProps => {
  const list: IToDoItem[] = [];
  Object.keys(store.toDoList).forEach(key => {
    if (store.toDoList[key].hasDueDate) {
      list.push(store.toDoList[key]);
    }
  });

  return {
    tasksList: list
  };
};

export default connect(mapStateToProps)(CalendarList);
