import uuid from "uuid";
import C from "../constants";
import { IAction, ITodoList } from "../model/store";

export const defaultToDo: ITodoList = {};

export default function toDoList(
  state: ITodoList = defaultToDo,
  action: IAction
): ITodoList {
  switch (action.type) {
    case C.ADD_NEW_TODO: {
      const newId = uuid();
      return {
        ...state,
        [newId]: {
          id: newId,
          value: action.payload,
          isCompleted: false,
          dateAdded: new Date()
        }
      };
    }
    case C.REMOVE_TODO: {
      if (state[action.payload]) {
        delete state[action.payload];
      }

      return { ...state };
    }
    case C.TOGGLE_TODO_STATUS: {
      state[action.payload].isCompleted = !state[action.payload].isCompleted;

      return { ...state };
    }
    case C.UPDATE_TODO_TEXT: {
      state[action.payload.id].value = action.payload.newValue;

      return { ...state };
    }
    case C.LOAD_STORE: {
      if (action.payload.toDoList) {
        return { ...action.payload.toDoList };
      }
    }
    case C.INIT_TODO_LIST: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
