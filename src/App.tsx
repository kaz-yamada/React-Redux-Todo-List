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
      paddingBottom: theme.spacing(1) * 6,
      display: "flex",
      flexFlow: "column"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    container: {
      display: "flex",
      height: "100%",
      padding: theme.spacing(1) * 2,
      paddingBottom: 0
    }
  });

class App extends React.Component<IStyles & IAppDispatch, {}> {
  public componentDidMount() {
    /**
     * Get saved user data from cache
     */
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
          <div className={classes.container}>
            <Switch>
              <Route exact={true} path="/" component={HomeView} />
              <Route path={`/calendar/:date?`} component={CalendarView} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch): IAppDispatch => ({
  loadStore: (store: IReduxStore) => dispatch(loadStore(store))
});

export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
