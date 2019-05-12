import { connect } from "react-redux";

import Calendar from "./Calendar";

import { Event } from "react-big-calendar";
import { IReduxStore } from "../../model/store";

export interface ICalendarProps {
  // toDoList: IToDoItem[];
  eventsList: Event[];
}

const mapStateToProps = (store: IReduxStore): ICalendarProps => {
  const list = Object.keys(store.toDoList).map(key => {
    return {
      title: store.toDoList[key].value,
      start: store.toDoList[key].dueDate,
      end: store.toDoList[key].dueDate,
      allDay: false,
      resource: store.toDoList[key].id
    };
  });

  return {
    eventsList: list
  };
};

export default connect(mapStateToProps)(Calendar);
