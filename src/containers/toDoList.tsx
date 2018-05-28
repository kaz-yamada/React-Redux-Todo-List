import * as React from "react";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { applyFilter, initToDoList, toggleItem } from "../actions/todos";
import AddItem from "../components/addItem";
import FilterList from "../components/filter";
import ToDoItem from "../components/toDoItem";
import { IReduxStore, IToDoItem } from "../model/store";

interface IStoreProps {
  todos: IToDoItem[];
  filter: string;
}

interface IDispatchFromProps {
  initList: () => void;
  toggleItem: (index: number) => void;
  applyFilter: (value: string) => void;
}

interface IStates {
  list: IToDoItem[];
}

class ToDoList extends React.Component<
  IStoreProps & IDispatchFromProps,
  IStates
> {
  constructor(props: IStoreProps & IDispatchFromProps) {
    super(props);
    this.state = {
      list: []
    };
  }

  private toggleItem = (index: number) => {
    this.props.toggleItem(index);
  };

  private toggleFilters = (value: string) => {
    this.props.applyFilter(value);
  };

  public static getDerivedStateFromProps(
    props: IStoreProps & IDispatchFromProps,
    state: IStates
  ) {
    let todoList = [...props.todos];

    if (props.filter === "active") {
      todoList = todoList.sort((a, b) => {
        if (a.status) {
          return 1;
        } else if (b.status) {
          return -1;
        }
        return 0;
      });
    } else if (props.filter === "completed") {
      todoList = todoList.sort((a, b) => {
        if (a.status) {
          return -1;
        } else if (b.status) {
          return 1;
        }
        return 0;
      });
    }
    console.log(todoList);

    return {
      list: todoList
    };
  }

  public componentDidMount() {
    this.setState({
      list: this.props.todos
    });
  }

  public render() {
    return (
      <Grid className="list" container={true}>
        <AddItem />
        <Grid container={true} alignItems="center">
          <Grid item={true} sm={4}>
            <Typography variant="title">List</Typography>
          </Grid>
          <Grid item={true} sm={8}>
            <FilterList
              option={this.props.filter}
              changeFilter={this.toggleFilters}
            />
          </Grid>
        </Grid>
        <Grid item={true} xs={12}>
          <List>
            {this.state.list.map((item, index) => {
              return (
                <ToDoItem
                  key={index}
                  index={index}
                  item={item}
                  handleClick={this.toggleItem}
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
  toggleItem: (index: number) => dispatch(toggleItem(index)),
  applyFilter: (value: string) => dispatch(applyFilter(value))
});

const MapStoreToProps = (store: IReduxStore) => {
  return {
    todos: store.toDos.toDoList,
    filter: store.toDos.filter
  };
};

export default connect<IStoreProps, IDispatchFromProps, void>(
  MapStoreToProps,
  mapDispatchToProps
)(ToDoList);
