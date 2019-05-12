import * as React from "react";

import Calendar from "../components/Calendar";
import CalenarListContainer from "../components/CalendarList";
// import TaskListContainer from "../components/TaskList";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "react-big-calendar/lib/css/react-big-calendar.css";

class CalendarView extends React.Component {
  public render() {
    return (
      <Paper style={{ flex: 1 }}>
        <Grid container={true} style={{ height: "100%" }}>
          <Grid item={true} md={true}>
            <Calendar />
          </Grid>
          <Grid item={true} md={4}>
            <CalenarListContainer />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default CalendarView;
