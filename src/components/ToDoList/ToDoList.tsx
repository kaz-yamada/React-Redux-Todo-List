import * as React from "react";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

import { IToDoListProps } from ".";
import ToDoItem from "../ToDoItem";

class ToDoList extends React.Component<IToDoListProps, {}> {
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
              <ToDoItem
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
