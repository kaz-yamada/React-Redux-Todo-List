import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { addToDoItem, updateAddItem } from "../actions/todos";
import { IReduxStore } from "../model/store";

interface IDispatchFromProps {
  addToDoItem: () => void;
  updateAddItem: (value: string) => void;
}

interface IProps {
  value: string;
}

class AddItem extends React.Component<IProps & IDispatchFromProps, {}> {
  constructor(props: IProps & IDispatchFromProps) {
    super(props);
  }

  private handleClick = () => {
    if (this.props.value) {
      this.props.addToDoItem();
    }
  };

  private updateText = (event: any) => {
    const value = event.target.value;
    if (value) {
      this.props.updateAddItem(value);
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
            value={this.props.value}
          />
        </Grid>
        <Grid item={true}>
          <Button
            variant="raised"
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
  addToDoItem: () => dispatch(addToDoItem()),
  updateAddItem: (value: string) => dispatch(updateAddItem(value))
});

const mapStoreToProps = (store: IReduxStore) => {
  return {
    value: store.toDos.newItem
  };
};

export default connect<IProps, IDispatchFromProps, void>(
  mapStoreToProps,
  mapDispatchToProps
)(AddItem);
