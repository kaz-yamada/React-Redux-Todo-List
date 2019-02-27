import * as React from "react";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  applyFilter,
  initToDoList,
  loadStore,
  removeItem,
  toggleItem
} from "../actions/todos";
import AddItem from "../components/addItem";
import FilterList from "../components/filter";
import ToDoItem from "../components/toDoItem";
import { IReduxStore, IToDoItem, ITodoList } from "../model/store";

interface IStoreProps {
  todos: ITodoList;
  filterType: string;
}

interface IDispatchFromProps {
  initList: () => void;
  loadStore: (store: IReduxStore) => void;
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
  applyFilter: (value: string) => void;
}

interface IStates {
  toDoList: IToDoItem[];
  filterActive: boolean;
}

class ToDoList extends React.Component<
  IStoreProps & IDispatchFromProps,
  IStates
> {
  constructor(props: IStoreProps & IDispatchFromProps) {
    super(props);
    this.state = {
      toDoList: [],
      filterActive: false
    };
  }

  private handleClick = (id: string, type: string) => {
    if (type === "remove") {
      this.props.removeItem(id);
    } else if (type === "status") {
      this.props.toggleItem(id);
    }
  };

  private toggleFilters = (value: string) => {
    this.props.applyFilter(value);
  };

  private loadList = () => {
    return this.state.toDoList.map((item, index) => {
      let isFiltered = true;
      if (this.props.filterType === "active" && item.status) {
        isFiltered = false;
      } else if (this.props.filterType === "completed" && !item.status) {
        isFiltered = false;
      }

      return (
        <ToDoItem
          key={index}
          index={index}
          item={this.props.todos[item.id]}
          handleClick={this.handleClick}
          isFiltered={isFiltered}
        />
      );
    });
  };

  public static getListFromStore = (
    toDoList: ITodoList,
    filterType: string
  ) => {
    let list = Object.keys(toDoList).map(key => {
      return toDoList[key];
    });

    if (filterType === "active") {
      list = list.sort((a, b) => {
        if (a.status) {
          return 1;
        } else if (b.status) {
          return -1;
        }
        return 0;
      });
    } else if (filterType === "completed") {
      list = list.sort((a, b) => {
        if (a.status) {
          return -1;
        } else if (b.status) {
          return 1;
        }
        return 0;
      });
    }

    return list;
  };

  public static getDerivedStateFromProps(
    props: IStoreProps & IDispatchFromProps,
    state: IStates
  ) {
    let list = Object.keys(props.todos).map(key => {
      return props.todos[key];
    });
    let filter = true;

    if (props.filterType === "all") {
      filter = false;
    } else {
      list = ToDoList.getListFromStore(props.todos, props.filterType);
    }

    return {
      toDoList: [...list],
      filterActive: filter
    };
  }

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
      <Grid className={`main-grid filter-${this.props.filterType}`} container={true}>
        <AddItem />
        <FilterList
          option={this.props.filterType}
          changeFilter={this.toggleFilters}
        />
        <Grid item={true} xs={12} className="list-container">
          <List className="list">{this.loadList()}</List>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  initList: () => dispatch(initToDoList()),
  loadStore: (store: IReduxStore) => dispatch(loadStore(store)),
  toggleItem: (id: string) => dispatch(toggleItem(id)),
  removeItem: (id: string) => dispatch(removeItem(id)),
  applyFilter: (value: string) => dispatch(applyFilter(value))
});

const mapStateToProps = (store: IReduxStore) => {
  return {
    todos: store.toDos.toDoList,
    filterType: store.toDos.filterType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
