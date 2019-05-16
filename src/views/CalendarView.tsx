import * as React from "react";

import moment from "moment";
import { RouteComponentProps } from "react-router";

import CalendarContainer from "../components/Calendar";
import CalenarListContainer from "../components/CalendarList";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "react-big-calendar/lib/css/react-big-calendar.css";

interface IState {
  selectedDate: Date;
}

interface IMatchParams {
  date: string;
}

interface IProps extends RouteComponentProps<IMatchParams> {}

class CalendarView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      selectedDate: new Date()
    };
  }

  public static getDerivedStateFromProps(props: IProps, state: IState): IState {
    const date = props.match.params.date
      ? moment(props.match.params.date, "DD-MMM-YYYY").toDate()
      : state.selectedDate;

    return {
      selectedDate: date
    };
  }

  public shouldComponentUpdate() {
    return (
      this.props.match.params.date !==
      moment(this.state.selectedDate).format("DD-MMM-YYYY")
    );
  }

  public render() {
    return (
      <Paper style={{ flex: 1 }}>
        <Grid container={true} style={{ height: "100%" }}>
          <Grid item={true} md={true}>
            <CalendarContainer selectedDate={this.state.selectedDate} />
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
