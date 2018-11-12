import { IAction, IToDoStore } from "../model/store";

export const defaultToDo: IToDoStore = {
  toDoList: [],
  newItem: "",
  filterType: "all"
};

export default function todoReducer(
  state: IToDoStore = defaultToDo,
  action: IAction
): IToDoStore {
  const uuid = require("uuid/v4");

  switch (action.type) {
    case "ADD_NEW_ITEM": {
      return {
        ...state,
        toDoList: [
          ...state.toDoList,
          { id: uuid(), value: state.newItem, status: false }
        ],
        newItem: ""
      };
    }
    case "UPDATE_ADD_ITEM_TEXT": {
      return {
        ...state,
        newItem: action.payload
      };
    }
    case "APPLY_FILTER": {
      return {
        ...state,
        filterType: action.payload
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        toDoList: state.toDoList.filter(item => item.id !== action.payload)
      };
    }
    case "TOGGLE_ITEM": {
      return {
        ...state,
        toDoList: state.toDoList.map(item => {
          if (item.id === action.payload) {
            item.status = !item.status;
          }

          return item;
        })
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
