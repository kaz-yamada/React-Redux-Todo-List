import React from "react";

import moment from "moment";

import List from "@material-ui/core/List";

import { ICalendarProps } from ".";
import CalendarListItem from "./CalendarListItem";

const CalendarList: React.FC<ICalendarProps> = ({
  tasksList
}) => {
  return (
    <List>
      {tasksList.length === 0 ? (
        <div>No tasks with dates found</div>
      ) : (
        tasksList.map(task => (
          <CalendarListItem
            key={task.id}
            id={task.id}
            title={task.value}
            date={moment(task.dueDate).format("DD-MMM-YYYY")}
          />
        ))
      )}
    </List>
  );
};

export default CalendarList;
