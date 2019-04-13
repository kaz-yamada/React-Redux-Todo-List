import { IAction, IReduxStore } from "../model/store";

import C from "../constants";

export const initToDoList = () => {
  return {
    type: C.INIT_TODO_LIST,
    payload: ""
  };
};

export const addToDoItem = (value: string): IAction => {
  return {
    type: C.ADD_NEW_TODO,
    payload: value
  };
};

export const toggleItem = (id: string): IAction => {
  return {
    type: C.TOGGLE_TODO_STATUS,
    payload: id
  };
};

export const removeItem = (id: string): IAction => {
  return {
    type: C.REMOVE_TODO,
    payload: id
  };
};

export const updateItem = (itemId: string, newText: string): IAction => {
  return {
    type: C.UPDATE_TODO_TEXT,
    payload: { id: itemId, newValue: newText }
  };
};

export const loadStore = (list: IReduxStore) => {
  return {
    type: C.LOAD_STORE,
    payload: list
  };
};

export const applyFilter = (filterName: string): IAction => {
  return {
    type: C.APPLY_FILTER,
    payload: filterName
  };
};

export const toggleDrawer = (): IAction => {
  return {
    type: C.TOGGLE_DRAWER,
    payload: null
  };
};
