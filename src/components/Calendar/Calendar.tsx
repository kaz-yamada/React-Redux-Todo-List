import * as React from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

import { ICalendarContainerProps } from ".";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

interface ICalendarProps {
  selectedDate: Date;
}

interface IProps extends ICalendarProps, ICalendarContainerProps {}

class ToDoCalendar extends React.Component<IProps, {}> {
  private calendarComponentRef: React.RefObject<FullCalendar>;

  constructor(props: IProps) {
    super(props);
    this.calendarComponentRef = React.createRef();
  }

  public componentDidUpdate() {
    if (this.calendarComponentRef.current !== null) {
      const calendarApi = this.calendarComponentRef.current.getApi();
      calendarApi.gotoDate(this.props.selectedDate); // call a method on the Calendar object
    }
  }

  public render() {
    const { eventsList } = this.props;
    return (
      <FullCalendar
        height={"parent"}
        ref={this.calendarComponentRef}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={eventsList}
      />
    );
  }
}

export default ToDoCalendar;
