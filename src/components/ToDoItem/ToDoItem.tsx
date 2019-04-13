import * as React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

import { IToDoItemProps } from ".";

interface IProps {
  id: string;
  isCompleted: boolean;
  value: string;
}

interface IStates {
  isEditing: boolean;
  newItem: string;
}

class ToDoItem extends React.Component<IProps & IToDoItemProps, IStates> {
  constructor(props: IProps & IToDoItemProps) {
    super(props);
    this.state = {
      isEditing: false,
      newItem: this.props.value
    };
  }

  private onTextUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItem: event.target.value });
  };

  private toggleStatus = () => {
    this.props.toggleItem(this.props.id);
  };

  private updateItem = () => {
    this.setState({ isEditing: false });
    if (this.state.newItem !== this.props.value) {
      this.props.updateItem(this.props.id, this.state.newItem);
    }
  };

  private handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      this.updateItem();
    }
  };

  private removeItem = () => {
    this.props.removeItem(this.props.id);
  };

  private toggleEdit = () => {
    this.setState({ isEditing: true });
  };

  private renderForm = () => {
    return (
      <div>
        <ListItem>
          <TextField
            style={{ width: "100%" }}
            onChange={this.onTextUpdate}
            value={this.state.newItem}
            onKeyDown={this.handleKeyPress}
          />
          <IconButton aria-label="Save" onClick={this.updateItem}>
            <SaveIcon />
          </IconButton>
        </ListItem>
        <Divider />
      </div>
    );
  };

  private renderItem = () => {
    const itemClass = this.props.isCompleted ? "completed" : "active";
    return (
      <div>
        <ListItem className={itemClass}>
          <Checkbox
            onClick={this.toggleStatus}
            checked={this.props.isCompleted}
          />
          <ListItemText primary={this.props.value} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={this.toggleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={this.removeItem}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </div>
    );
  };

  public render() {
    if (this.state.isEditing) {
      return this.renderForm();
    } else {
      return this.renderItem();
    }
  }
}

export default ToDoItem;
