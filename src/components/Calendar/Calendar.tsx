import React, { useEffect } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

import { ICalendarContainerProps } from ".";

interface ICalendarProps {
  selectedDate: Date;
}

interface IProps extends ICalendarProps, ICalendarContainerProps {}

const ToDoCalendar: React.FC<IProps> = ({ eventsList, selectedDate }) => {
  const calendarComponentRef: React.RefObject<FullCalendar> = React.createRef();

  useEffect(() => {
    if (calendarComponentRef.current !== null) {
      const calendarApi = calendarComponentRef.current.getApi();
      // call a method on the Calendar object
      calendarApi.gotoDate(selectedDate);
    }
  });

  return (
    <FullCalendar
      height={"parent"}
      ref={calendarComponentRef}
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin]}
      events={eventsList}
      themeSystem="standard"
    />
  );
};

export default ToDoCalendar;
