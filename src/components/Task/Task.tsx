import * as React from "react";

import moment from "moment";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

import { ITaskProps } from ".";

interface IProps {
  id: string;
  isCompleted: boolean;
  value: string;
  hasDueDate: boolean;
  dueDate?: string;
}

interface IStates {
  isEditing: boolean;
  newItem: string;
  newDate?: Date;
  hasDueDate: boolean;
}

class ToDoItem extends React.Component<IProps & ITaskProps, IStates> {
  constructor(props: IProps & ITaskProps) {
    super(props);

    if (this.props.hasDueDate && this.props.dueDate !== undefined) {
      this.state = {
        isEditing: false,
        newItem: this.props.value,
        hasDueDate: this.props.hasDueDate,
        newDate: moment(this.props.dueDate).toDate()
      };
    } else {
      this.state = {
        isEditing: false,
        newItem: this.props.value,
        hasDueDate: this.props.hasDueDate
      };
    }
  }

  private onTextUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItem: event.target.value });
  };

  private toggleStatus = () => {
    this.props.toggleTask(this.props.id);
  };

  private updateTask = () => {
    this.setState({ isEditing: false }, () => {
      this.props.updateTask(this.props.id, this.state.newItem);
    });
  };

  private toggleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ hasDueDate: event.target.checked });
  };

  private handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newDate: new Date(event.target.value) });
  };

  private handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      this.updateTask();
    }
  };

  private removeTask = () => {
    this.props.removeTask(this.props.id);
  };

  private toggleEdit = () => {
    this.setState({ isEditing: true });
  };

  private renderForm = () => {
    return (
      <TableRow>
        <TableCell colSpan={5}>
          <Grid container={true} spacing={16} alignItems="center" className="edit-row">
            <Grid item={true} md={7} xs={12}>
              <TextField
                style={{ width: "100%" }}
                label="Task Name"
                onChange={this.onTextUpdate}
                value={this.state.newItem}
                onKeyDown={this.handleKeyPress}
              />
            </Grid>
            <Grid item={true} md={2} xs={4} className="flex-center">
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
            <Grid item={true} md={2} xs={4} className="flex-center">
              <TextField
                label="Due Date"
                type="date"
                defaultValue={moment(this.state.newDate).format("YYYY-MM-DD")}
                InputLabelProps={{ shrink: true }}
                onChange={this.handleDateChange}
              />
            </Grid>
            <Grid item={true} sm={1} xs={4} className="flex-center">
              <IconButton aria-label="Save" onClick={this.updateTask}>
                <SaveIcon />
              </IconButton>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
    );
  };

  private renderItem = () => {
    const itemClass = this.props.isCompleted ? "completed" : "active";
    return (
      <TableRow className={itemClass}>
        <TableCell className="icon">
          <Checkbox
            onClick={this.toggleStatus}
            checked={this.props.isCompleted}
          />
        </TableCell>
        <TableCell>{this.props.value}</TableCell>
        <TableCell>
          {this.props.hasDueDate && this.props.dueDate
            ? moment(this.props.dueDate).format("DD-MMM-YYYY")
            : "-"}
        </TableCell>
        <TableCell className="icon">
          <IconButton aria-label="Edit" onClick={this.toggleEdit}>
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell className="icon">
          <IconButton aria-label="Delete" onClick={this.removeTask}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  public render() {
    return this.state.isEditing ? this.renderForm() : this.renderItem();
  }
}

export default ToDoItem;
