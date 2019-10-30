import uuid from "uuid";
import C from "../constants";
import { IAction, ITodoList } from "../model/store";

export const defaultToDo: ITodoList = {};

export default function toDoList(
  state: ITodoList = defaultToDo,
  action: IAction
): ITodoList {
  switch (action.type) {
    case C.ADD_NEW_TASK: {
      const newId = uuid();
      return {
        ...state,
        [newId]: {
          id: newId,
          value: action.payload.taskName,
          isCompleted: false,
          hasDueDate: action.payload.hasDueDate,
          dueDate: action.payload.dueDate.toISOString(),
          dateAdded: new Date().toISOString()
        }
      };
    }
    case C.REMOVE_TASK: {
      if (state[action.payload]) {
        delete state[action.payload];
      }

      return { ...state };
    }
    case C.TOGGLE_TASK_STATUS: {
      state[action.payload].isCompleted = !state[action.payload].isCompleted;

      return { ...state };
    }
    case C.UPDATE_TASK: {
      const { id, newValue, hasDueDate, newDate } = action.payload;
      state[id].value = newValue;
      state[id].hasDueDate = hasDueDate;

      if (hasDueDate) {
        state[id].dueDate = newDate;
      }

      return { ...state };
    }
    case C.LOAD_STORE: {
      if (action.payload.toDoList) {
        return { ...action.payload.toDoList };
      }
    }
    // eslint-disable-next-line
    case C.INIT_TASK_LIST: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
