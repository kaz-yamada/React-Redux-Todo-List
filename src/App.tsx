import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import Header from "./containers/header";
import ToDoList from "./containers/toDoList";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
        <CssBaseline />
        <div className="page">
          <Header />
          <Paper className="inner-page">
            <ToDoList />
          </Paper>
        </div>
      </div>
    );
  }
}

export default App;
