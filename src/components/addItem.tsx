import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

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

  private updateText = (event: any) => {
    const value = event.target.value;
    if (value) {
      this.setState({ newItemText: value });
    }
  };

  public render() {
    return (
      <Grid container={true} className="add-item" alignItems="flex-end">
        <Grid item={true} sm={6}>
          <TextField
            label="Enter New Item"
            className="add-item-text"
            fullWidth={true}
            onChange={this.updateText}
            value={this.state.newItemText}
          />
        </Grid>
        <Grid item={true}>
          <Button
            variant="contained"
            color="primary"
            className="add-item-button"
            onClick={this.handleClick}
          >
            Add Item
          </Button>
        </Grid>
      </Grid>
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
