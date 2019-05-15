import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";

import Footer from "./components/Footer";
import HeaderContainer from "./components/Header";
import SideDrawerContainer from "./components/SideDrawer";
import CalendarView from "./views/CalendarView";
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
      paddingBottom: theme.spacing.unit * 6,
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
      <div className="app-root">
        <CssBaseline />
        <HeaderContainer />
        <SideDrawerContainer />
        <div className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact={true} path="/" component={HomeView} />
            <Route path={`/calendar/:date?`} component={CalendarView} />
          </Switch>
        </div>
        <Footer />
      </div>
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
