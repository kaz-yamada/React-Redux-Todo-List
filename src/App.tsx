import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";

import Header from "./containers/Header";
import ToDoList from "./containers/ToDoList";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
        <CssBaseline />
        <div className="page">
          <Header />
          <div className="inner-page">
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
