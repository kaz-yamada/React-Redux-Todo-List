import * as React from "react";

import { createStyles, Theme, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/AddCircle";

import { IAddItemContainerProps } from ".";
import { IStyles } from "../../model";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    input: {
      marginLeft: 8,
      flex: 1
    }
  });

interface IState {
  newItemText: string;
}

class AddItemForm extends React.Component<
  IAddItemContainerProps & IStyles,
  IState
> {
  constructor(props: IAddItemContainerProps & IStyles) {
    super(props);

    this.state = {
      newItemText: ""
    };
  }

  private handleSubmit = () => {
    if (this.state.newItemText) {
      this.props.addToDoItem(this.state.newItemText);
      this.setState({ newItemText: "" });
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

  public render() {
    return (
      <Grid item={true} xs={12} className={this.props.classes.root}>
        <TextField
          label="Enter New Item"
          className={this.props.classes.input}
          onChange={this.handleTextUpdate}
          onKeyPress={this.handleKeyPress}
          value={this.state.newItemText}
        />
        <IconButton aria-label="Add" onClick={this.handleSubmit}>
          <AddIcon />
        </IconButton>
      </Grid>
    );
  }
}

export default withStyles(styles)(AddItemForm);
