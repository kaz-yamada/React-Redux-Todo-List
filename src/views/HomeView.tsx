import * as React from "react";

import AddItemFormContainer from "../components/AddItemForm";
import FilterControlContainer from "../components/FilterMenu";
import ToDoListContainer from "../components/ToDoList";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import { AddCircle } from "@material-ui/icons";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1
    },
    button: {
      margin: theme.spacing.unit
    },
    rightIcon: {
      marginLeft: theme.spacing.unit
    },
    filler: {
      flex: 1
    }
  });

interface IProps extends WithStyles<typeof styles> {}

interface IState {
  showAddNewItem: boolean;
}

class HomeView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showAddNewItem: false
    };
  }

  private handelAddButton = () => {
    this.setState((prevState: IState) => {
      return {
        showAddNewItem: !prevState.showAddNewItem
      };
    });
  };

  public render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Grid container={true} alignItems="stretch">
          <Grid item={true} xs={12}>
            <Toolbar className={classes.filler}>
              <Button variant="contained" onClick={this.handelAddButton}>
                Add New Item
                <AddCircle className={classes.rightIcon} />
              </Button>
              <div className={classes.filler} />
              <FilterControlContainer />
            </Toolbar>
          </Grid>
          <Grid item={true} xs={12}>
            <Divider />
          </Grid>
          {this.state.showAddNewItem ? <AddItemFormContainer /> : ""}
          <Grid item={true} xs={12}>
            <Divider />
          </Grid>
          <ToDoListContainer />
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(HomeView);
