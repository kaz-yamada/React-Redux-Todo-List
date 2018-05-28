import * as React from "react";

import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { IToDoItem } from "../model/store";

interface IProps {
  index: number;
  item: IToDoItem;
  handleClick: (val: number) => void;
}

class ToDoItem extends React.Component<IProps, {}> {
  private toggleStatus = () => {
    this.props.handleClick(this.props.index);
  };

  public render() {
    return (
      <div>
        <ListItem onClick={this.toggleStatus} button={true}>
          <Checkbox checked={this.props.item.status} tabIndex={-1} />
          <ListItemText primary={this.props.item.value} />
        </ListItem>
        <Divider />
      </div>
    );
  }
}

export default ToDoItem;
