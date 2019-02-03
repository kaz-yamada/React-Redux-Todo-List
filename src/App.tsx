import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./views/home";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
        <CssBaseline />
        <Home />
      </div>
    );
  }
}

export default App;
