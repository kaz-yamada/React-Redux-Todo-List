import * as React from "react";

import * as moment from "moment";
import BigCalendar from "react-big-calendar";

import { ICalendarProps } from ".";

const localizer = BigCalendar.momentLocalizer(moment);

interface IProps {
  selectedDate?: Date;
}

class ToDoCalendar extends React.Component<ICalendarProps & IProps, {}> {
  private onNavigate = () => {};

  public render() {
    return (
      <BigCalendar
        localizer={localizer}
        events={this.props.eventsList}
        defaultDate={new Date()}
        onNavigate={this.onNavigate}
        date={this.props.selectedDate}
      />
    );
  }
}

export default ToDoCalendar;
