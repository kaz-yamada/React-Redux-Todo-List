import uuid from "uuid";
import { IAction, IToDoStore } from "../model/store";

export const defaultToDo: IToDoStore = {
  toDoList: {},
  filterType: "all"
};

export default function todoReducer(
  state: IToDoStore = defaultToDo,
  action: IAction
): IToDoStore {
  switch (action.type) {
    case "ADD_NEW_ITEM": {
      const newId = uuid();
      return {
        ...state,
        toDoList: {
          ...state.toDoList,
          [newId]: { id: newId, value: action.payload, isCompleted: false }
        }
      };
    }
    case "UPDATE_ADD_ITEM_TEXT": {
      return {
        ...state
      };
    }
    case "APPLY_FILTER": {
      return {
        ...state,
        filterType: action.payload
      };
    }
    case "REMOVE_ITEM": {
      if (state.toDoList[action.payload]) {
        delete state.toDoList[action.payload];
      }

      return {
        ...state,
        toDoList: { ...state.toDoList }
      };
    }
    case "TOGGLE_ITEM": {
      state.toDoList[action.payload].isCompleted = !state.toDoList[
        action.payload
      ].isCompleted;

      return {
        ...state,
        toDoList: { ...state.toDoList }
      };
    }
    case "UPDATE_ITEM": {
      state.toDoList[action.payload.id].value = action.payload.newValue;

      return {
        ...state,
        toDoList: { ...state.toDoList }
      };
    }
    case "LOAD_STORE": {
      if (action.payload.toDos != null) {
        return { ...action.payload.toDos };
      }
    }
    case "INIT_TODO_LIST": {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
