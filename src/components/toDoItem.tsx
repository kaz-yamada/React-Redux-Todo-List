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

import { IToDoItem } from "../model/store";

interface IProps {
  index: number;
  item: IToDoItem;
  isFiltered: boolean;
  handleClick: (id: string, type: string, newValue?: string) => void;
}

interface IStates {
  isEditing: boolean;
  newItem: string;
}

class ToDoItem extends React.Component<IProps, IStates> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isEditing: false,
      newItem: this.props.item.value
    };
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItem: event.target.value });
  };

  private toggleStatus = () => {
    this.props.handleClick(this.props.item.id, "status");
  };

  private updateItem = () => {
    this.setState({ isEditing: false });
    this.props.handleClick(this.props.item.id, "update", this.state.newItem);
  };

  private removeItem = () => {
    this.props.handleClick(this.props.item.id, "remove");
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
            onChange={this.handleChange}
            value={this.state.newItem}
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
    const itemClass = this.props.item.status ? "completed" : "active";
    return (
      <div>
        <ListItem
          className={itemClass}
          onClick={this.toggleStatus}
          button={true}
        >
          <Checkbox
            checked={this.props.item.status}
            color={this.props.isFiltered ? "secondary" : "default"}
          />
          <ListItemText primary={this.props.item.value} />
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
    if (!this.props.isFiltered) {
      return <div />;
    } else if (this.state.isEditing) {
      return this.renderForm();
    } else {
      return this.renderItem();
    }
  }
}

export default ToDoItem;
