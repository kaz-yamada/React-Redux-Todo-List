import * as React from "react";

import moment from "moment";

import List from "@material-ui/core/List";

import { ICalendarProps } from ".";
import CalendarListItem from "./CalendarListItem";

class CalendarList extends React.Component<ICalendarProps, {}> {
  public render() {
    return (
      <List>
        {this.props.tasksList.map(task => (
          <CalendarListItem
            key={task.id}
            id={task.id}
            title={task.value}
            date={moment(task.dueDate).format("DD-MMM-YYYY")}
          />
        ))}
      </List>
    );
  }
}

export default CalendarList;
