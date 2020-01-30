import React from "react";

import moment from "moment";
import { RouteComponentProps } from "react-router";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

import CalendarContainer from "../components/Calendar";
import CalenarListContainer from "../components/CalendarList";

interface IState {
  selectedDate: Date;
}

interface IMatchParams {
  date: string;
}

interface IProps
  extends RouteComponentProps<IMatchParams>,
    WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      minHeight: 600
    },
    container: { height: "100%" },
    calendar: {
      margin: theme.spacing(1) * 2
    }
  });

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

  public render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid container={true} className={classes.container}>
          <Grid item={true} md={true} className={classes.calendar}>
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

export default withStyles(styles)(CalendarView);
