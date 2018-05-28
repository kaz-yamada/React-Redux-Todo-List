import * as React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Header from "../containers/header";
import ToDoList from "../containers/toDoList";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div id="home" className="page">
        <Header />
        <Paper className="inner-page">
          <Grid className="todo-list" container={true} justify="center">
            <ToDoList />
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default Home;
