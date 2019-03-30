import * as React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Header from "./components/Header";
import AddItemFormContainer from "./containers/AddItemFormContainer";
import FilterControlContainer from "./containers/FilterControlContainer";
import ToDoListContainer from "./containers/ToDoListContainer";

import { loadStore } from "./actions/todos";
import { IReduxStore } from "./model/store";

interface IProps {
  loadStore: (store: IReduxStore) => void;
}

class App extends React.Component<IProps, {}> {
  public componentDidMount() {
    // Get saved user data from cache
    const persistedState = localStorage.getItem("reduxState")
      ? JSON.parse(localStorage.getItem("reduxState") || "")
      : {};
    if (persistedState) {
      this.props.loadStore(persistedState);
    }
  }

  public render() {
    return (
      <div className="app">
        <CssBaseline />
        <div className="page">
          <Header />
          <div className="inner-page">
            <Grid className={`main-grid`} container={true}>
              <AddItemFormContainer />
              <FilterControlContainer />
              <ToDoListContainer />
            </Grid>
          </div>
        </div>
        <footer>
          Built with <a href="https://reactjs.org/">React</a> by
          <a href="https://www.kazyamada.com">Kazuki Yamada</a>.{" "}
          <a href="https://github.com/kaz-yamada/React-Redux-Todo-List">
            Source
          </a>
        </footer>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch): IProps => ({
  loadStore: (store: IReduxStore) => dispatch(loadStore(store))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
