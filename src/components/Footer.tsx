import * as React from "react";

import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { IStyles } from "../model";

const styles = (theme: Theme) =>
  createStyles({
    footer: {
      bottom: 0,
      textAlign: "center",
      width: "100%",
      paddingBottom: theme.spacing.unit * 2
    }
  });

class Footer extends React.Component<IStyles, {}> {
  public render() {
    return (
      <Grid className={this.props.classes.footer} item={true} xs={12}>
        <Typography variant="body1">
          Built with <a href="https://reactjs.org/">React</a> by{" "}
          <a href="https://www.kazyamada.com">Kazuki Yamada</a>.{" "}
          <a href="https://github.com/kaz-yamada/React-Redux-Todo-List">
            Source
          </a>
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);