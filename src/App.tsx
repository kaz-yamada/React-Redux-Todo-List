import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";

import Footer from "./components/Footer";
import HeaderContainer from "./components/Header";
import SideDrawerContainer from "./components/SideDrawer";
import HomeView from "./views/HomeView";

import { loadStore } from "./actions";
import { IStyles } from "./model";
import { IReduxStore } from "./model/store";

interface IAppDispatch {
  loadStore: (store: IReduxStore) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      display: "flex",
      flexFlow: "column"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    }
  });

class App extends React.Component<IStyles & IAppDispatch, {}> {
  /**
   * Get saved user data from cache
   */
  public componentDidMount() {
    const persistedState = localStorage.getItem("reduxState")
      ? JSON.parse(localStorage.getItem("reduxState") || "")
      : {};
    if (persistedState != null) {
      this.props.loadStore(persistedState);
    }
  }

  public render() {
    const { classes } = this.props;

    return (
      <Grid className="app" container={true}>
        <CssBaseline />
        <HeaderContainer />
        <SideDrawerContainer />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <HomeView />
        </div>
        <Footer />
      </Grid>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch): IAppDispatch => ({
  loadStore: (store: IReduxStore) => dispatch(loadStore(store))
});

export default withStyles(styles, { withTheme: true })(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
