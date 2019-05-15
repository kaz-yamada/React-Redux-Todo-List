import { connect } from "react-redux";
import { Dispatch } from "redux";

import CalendarList from "./CalendarList";

// import { Event } from "react-big-calendar";
import { IReduxStore, IToDoItem } from "../../model/store";

interface IStoreProps {
  tasksList: IToDoItem[];
}

interface IDispatchProps {
  //   selectEvent: (date: Date) => void;
}

export interface ICalendarProps extends IStoreProps, IDispatchProps {}

const mapStateToProps = (store: IReduxStore): IStoreProps => {
  const list: IToDoItem[] = [];
  Object.keys(store.toDoList).forEach(key => {
    if (store.toDoList[key].hasDueDate) {
      list.push(store.toDoList[key]);
    }
  });

  return {
    tasksList: list
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  // selectDate: (value: Date) => dispatch(applyFilter(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarList);
