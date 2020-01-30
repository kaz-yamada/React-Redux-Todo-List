import React from "react";

import { createStyles, Theme, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

import { IAddItemContainerProps } from ".";
import { IStyles } from "../../model";
import { formatDate } from "../../utils";

interface IState {
  newItemText: string;
  hasDueDate: boolean;
  dueDate: Date;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: `${theme.spacing(1)}px ${theme.spacing(1) * 3}px`
    }
  });

const defualtState: IState = {
  newItemText: "",
  hasDueDate: false,
  dueDate: new Date()
};

class AddItemForm extends React.Component<
  IAddItemContainerProps & IStyles,
  IState
> {
  constructor(props: IAddItemContainerProps & IStyles) {
    super(props);

    this.state = { ...defualtState };
  }

  private checkForm = () => {
    if (!this.state.newItemText) {
      return false;
    }
    if (this.state.hasDueDate && this.state.dueDate === undefined) {
      return false;
    }

    return true;
  };

  private handleSubmit = () => {
    if (this.checkForm()) {
      this.props.addTaskItem(
        this.state.newItemText,
        this.state.hasDueDate,
        this.state.dueDate
      );

      this.setState({ ...defualtState });
    }
  };

  private handleTextUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItemText: event.target.value });
  };

  private handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  private toggleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ hasDueDate: event.target.checked });
  };

  private handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dueDate: new Date(event.target.value) });
  };

  public render() {
    const { classes } = this.props;

    return (
      <Grid item={true} xs={12} className={classes.root}>
        <Grid container={true} alignItems="center" spacing={6}>
          <Grid item={true} md={true} xs={12}>
            <TextField
              label="Enter New Item"
              className={"add-task-input"}
              onChange={this.handleTextUpdate}
              onKeyPress={this.handleKeyPress}
              value={this.state.newItemText}
            />
          </Grid>
          <Grid className={classes.centerItem} item={true} md={2} xs={4}>
            <FormControlLabel
              value="top"
              control={
                <Checkbox
                  onChange={this.toggleDate}
                  checked={this.state.hasDueDate}
                />
              }
              label="Due Date?"
              labelPlacement="top"
            />
          </Grid>
          <Grid item={true} md={2} xs={6}>
            <TextField
              label="Due Date"
              type="date"
              disabled={!this.state.hasDueDate}
              onChange={this.handleDateChange}
              defaultValue={formatDate(this.state.dueDate)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item={true} md={1} xs={1} className="center-horizontal">
            <Button
              aria-label="Add"
              variant="contained"
              onClick={this.handleSubmit}
              endIcon={<SaveIcon />}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AddItemForm);
