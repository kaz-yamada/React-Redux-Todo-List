import * as React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";

import DeleteIcon from "@material-ui/icons/Delete";

import { IToDoItem } from "../model/store";

interface IProps {
  index: number;
  item: IToDoItem;
  isFiltered: boolean;
  handleClick: (id: string, type: string) => void;
}

class ToDoItem extends React.Component<IProps, {}> {
  private toggleStatus = () => {
    this.props.handleClick(this.props.item.id, "status");
  };

  private removeItem = () => {
    this.props.handleClick(this.props.item.id, "remove");
  };

  public render() {
    const itemClass = this.props.item.status ? "completed" : "active";
    if (!this.props.isFiltered) {
      return <div />;
    }

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
            <IconButton aria-label="Delete" onClick={this.removeItem}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </div>
    );
  }
}

export default ToDoItem;
