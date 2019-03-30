import * as React from "react";
import ToDoItemContainer from "../containers/ToDoItemContainer";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

import {
  IToDoListDispatch,
  IToDoListProps
} from "../containers/ToDoListContainer";
import { IToDoItem } from "../model/store";

interface IStates {
  toDoList: IToDoItem[];
}

class ToDoList extends React.Component<
  IToDoListProps & IToDoListDispatch,
  IStates
> {
  constructor(props: IToDoListProps & IToDoListDispatch) {
    super(props);
    this.state = {
      toDoList: []
    };
  }

  public render() {
    return (
      <Grid
        item={true}
        xs={12}
        className={`list-container filter-${this.props.filterType}`}
      >
        <List className="list">
          {this.props.toDoList.map((item, index) => {
            return (
              <ToDoItemContainer
                key={index}
                id={item.id}
                isCompleted={item.isCompleted}
                value={item.value}
              />
            );
          })}
        </List>
      </Grid>
    );
  }
}

export default ToDoList;
