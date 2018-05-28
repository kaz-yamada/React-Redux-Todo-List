import { IAction, IToDoStore } from "../model/store";

export const defaultToDo: IToDoStore = {
  toDoList: [],
  newItem: "",
  filter: "all"
};

export default function todoReducer(
  state: IToDoStore = defaultToDo,
  action: IAction
): IToDoStore {
  switch (action.type) {
    case "ADD_NEW_ITEM": {
      return {
        ...state,
        toDoList: [...state.toDoList, { value: state.newItem, status: false }],
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
        filter: action.payload
      };
    }
    case "TOGGLE_ITEM": {
      return {
        ...state,
        toDoList: state.toDoList.map((item, index) => {
          if (index === action.payload) {
            item.status = !item.status;
          }

          return item;
        })
      };
    }
    case "INIT_TODO_LIST": {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
