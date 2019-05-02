import * as React from "react";

import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { IStyles } from "../model";

const styles = (theme: Theme) =>
  createStyles({
    footer: {
      position: "fixed",
      background: "white",
      bottom: 0,
      textAlign: "center",
      width: "100%",
      paddingBottom: theme.spacing.unit * 2
    }
  });

class Footer extends React.Component<IStyles, {}> {
  public render() {
    return (
      <div className={this.props.classes.footer}>
        <Typography variant="body1">
          Built with <a href="https://reactjs.org/">React</a> by{" "}
          <a href="https://www.kazyamada.com">Kazuki Yamada</a>.{" "}
          <a href="https://github.com/kaz-yamada/React-Redux-Todo-List">
            Source
          </a>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
