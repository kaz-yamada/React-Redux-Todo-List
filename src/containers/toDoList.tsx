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
import { IReduxStore, IToDoItem } from "../model/store";

interface IStoreProps {
  todos: IToDoItem[];
  filterType: string;
}

interface IDispatchFromProps {
  initList: () => void;
  loadStore: (store: IReduxStore) => void;
  toggleItem: (index: number) => void;
  removeItem: (index: number) => void;
  applyFilter: (value: string) => void;
}

interface IStates {
  list: IToDoItem[];
  filterActive: boolean;
}

class ToDoList extends React.Component<
  IStoreProps & IDispatchFromProps,
  IStates
> {
  constructor(props: IStoreProps & IDispatchFromProps) {
    super(props);
    this.state = {
      list: [],
      filterActive: false
    };
  }

  private handleClick = (index: number, type: string) => {
    if (type === "remove") {
      this.props.removeItem(index);
    } else if (type === "status") {
      this.props.toggleItem(index);
    }
  };

  private toggleFilters = (value: string) => {
    this.props.applyFilter(value);
  };

  public static getDerivedStateFromProps(
    props: IStoreProps & IDispatchFromProps,
    state: IStates
  ) {
    let todoList = [...props.todos];

    if (props.filterType === "all") {
      return {
        list: todoList,
        filterActive: false
      };
    }

    if (props.filterType === "active") {
      todoList = todoList.sort((a, b) => {
        if (a.status) {
          return 1;
        } else if (b.status) {
          return -1;
        }
        return 0;
      });
    } else if (props.filterType === "completed") {
      todoList = todoList.sort((a, b) => {
        if (a.status) {
          return -1;
        } else if (b.status) {
          return 1;
        }
        return 0;
      });
    }

    return {
      list: todoList,
      filterActive: true
    };
  }

  public componentDidMount() {
    const persistedState = localStorage.getItem("reduxState")
      ? JSON.parse(localStorage.getItem("reduxState") || "")
      : {};
    if (persistedState) {
      this.props.loadStore(persistedState);
    }

    this.setState({
      list: this.props.todos
    });
  }

  public render() {
    return (
      <Grid className={`list filter-${this.props.filterType}`} container={true}>
        <AddItem />
        <FilterList
          option={this.props.filterType}
          changeFilter={this.toggleFilters}
        />
        <Grid item={true} xs={12}>
          <List>
            {this.state.list.map((item, index) => {
              let isFiltered = true;
              if (this.props.filterType === "active" && item.status) {
                isFiltered = false;
              } else if (
                this.props.filterType === "completed" &&
                !item.status
              ) {
                isFiltered = false;
              }

              return (
                <ToDoItem
                  key={index}
                  index={index}
                  item={item}
                  handleClick={this.handleClick}
                  isFiltered={isFiltered}
                />
              );
            })}
          </List>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  initList: () => dispatch(initToDoList()),
  loadStore: (store: IReduxStore) => dispatch(loadStore(store)),
  toggleItem: (index: number) => dispatch(toggleItem(index)),
  removeItem: (index: number) => dispatch(removeItem(index)),
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
