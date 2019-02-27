import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import AddIcon from "@material-ui/icons/AddCircle";

import { addToDoItem } from "../actions/todos";

interface IDispatchFromProps {
  addToDoItem: (value: string) => void;
}

interface IState {
  newItemText: string;
}

class AddItem extends React.Component<IDispatchFromProps, IState> {
  constructor(props: IDispatchFromProps) {
    super(props);

    this.state = {
      newItemText: ""
    };
  }

  private handleClick = () => {
    if (this.state.newItemText) {
      this.props.addToDoItem(this.state.newItemText);
      this.setState({ newItemText: "" });
    }
  };

  private updateText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItemText: event.target.value });
  };

  public render() {
    return (
      <Paper className="add-item" elevation={1}>
        <TextField
          label="Enter New Item"
          className="add-item-text"
          fullWidth={true}
          onChange={this.updateText}
          value={this.state.newItemText}
        />
        <IconButton aria-label="Add" onClick={this.handleClick}>
          <AddIcon />
        </IconButton>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  addToDoItem: (value: string) => dispatch(addToDoItem(value))
});

export default connect(
  null,
  mapDispatchToProps
)(AddItem);
