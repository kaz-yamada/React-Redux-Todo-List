import { connect } from "react-redux";

import { EventInput } from "@fullcalendar/core";

import Calendar from "./Calendar";

import { IReduxStore } from "../../model/store";

export interface ICalendarContainerProps {
  eventsList: EventInput[];
}

const mapStateToProps = (store: IReduxStore): ICalendarContainerProps => {
  const list: EventInput[] = [];
  Object.keys(store.toDoList).forEach(key => {
    const { id, value } = store.toDoList[key];
    if (store.toDoList[key].hasDueDate) {
      const { dueDate } = store.toDoList[key];

      list.push({
        id,
        title: value,
        start: dueDate
      });
    }
  });

  return {
    eventsList: list
  };
};

export default connect(mapStateToProps)(Calendar);
