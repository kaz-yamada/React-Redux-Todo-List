import Task from "./Task";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { removeTask, toggleTask, updateTask } from "../../actions";

export interface ITaskProps {
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  updateTask: (
    id: string,
    newValue: string,
    hasDueDate: boolean,
    newDate?: Date
  ) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): ITaskProps => {
  return {
    toggleTask: (id: string) => dispatch(toggleTask(id)),
    removeTask: (id: string) => dispatch(removeTask(id)),
    updateTask: (
      id: string,
      newValue: string,
      hasDueDate: boolean,
      newDate?: Date
    ) => dispatch(updateTask(id, newValue, hasDueDate, newDate))
  };
};

const TaskContainer = connect(
  null,
  mapDispatchToProps
)(Task);

export default TaskContainer;
