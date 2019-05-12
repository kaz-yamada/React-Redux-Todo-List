import { connect } from "react-redux";

import CalendarList from "./CalendarList";

// import { Event } from "react-big-calendar";
import { IReduxStore, IToDoItem } from "../../model/store";

export interface ICalendarProps {
  tasksList: IToDoItem[];
}

const mapStateToProps = (store: IReduxStore): ICalendarProps => {
  const list = Object.keys(store.toDoList)
    .map(key => {
      return store.toDoList[key];
      // return {
      //   title: store.toDoList[key].value,
      //   start: store.toDoList[key].dueDate,
      //   end: store.toDoList[key].dueDate,
      //   allDay: false,
      //   resource: store.toDoList[key].id
      // };
    })
    .filter(task => task.hasDueDate);

  return {
    tasksList: list
  };
};

export default connect(mapStateToProps)(CalendarList);
