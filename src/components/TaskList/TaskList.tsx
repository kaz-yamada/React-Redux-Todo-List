import * as React from "react";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { IToDoListProps } from ".";
import ToDoItem from "../Task";

class ToDoList extends React.Component<IToDoListProps, {}> {
  public render() {
    return (
      <Grid
        item={true}
        xs={12}
        className={`list-container filter-${this.props.filterType}`}
      >
        <Table className="task-list">
          <TableHead>
            <TableRow>
              <TableCell align="center">Status</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell colSpan={2} />
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.toDoList.map((item, index) => {
              return (
                <ToDoItem
                  key={index}
                  id={item.id}
                  isCompleted={item.isCompleted}
                  hasDueDate={item.hasDueDate}
                  dueDate={item.dueDate}
                  value={item.value}
                />
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

export default ToDoList;
