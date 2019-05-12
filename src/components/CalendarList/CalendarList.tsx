import * as React from "react";

import moment from "moment";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { ICalendarProps } from ".";

class ToDoCalendar extends React.Component<ICalendarProps, {}> {
  public render() {
    return (
      <List>
        {this.props.tasksList.map(task => {
          return (
            <ListItem key={task.id}>
              <ListItemText
                primary={task.value}
                secondary={moment(task.dueDate).format("DD-MMM-YYYY")}
              />
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default ToDoCalendar;
