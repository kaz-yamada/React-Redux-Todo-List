import * as React from "react";

import * as moment from "moment";
import BigCalendar from "react-big-calendar";

import { ICalendarProps } from ".";

const localizer = BigCalendar.momentLocalizer(moment);

class ToDoCalendar extends React.Component<ICalendarProps, {}> {
  public render() {
    return <BigCalendar localizer={localizer} events={this.props.eventsList} />;
  }
}

export default ToDoCalendar;
