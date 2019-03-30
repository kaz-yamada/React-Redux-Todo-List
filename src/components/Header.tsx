import * as React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="header">
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit">
              To Do List
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
