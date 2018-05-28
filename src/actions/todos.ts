import { IAction } from "../model/store";

export function addToDoItem(): IAction {
  return {
    type: "ADD_NEW_ITEM",
    payload: ""
  };
}

export function updateAddItem(value: string): IAction {
  return {
    type: "UPDATE_ADD_ITEM_TEXT",
    payload: value
  };
}

export function toggleItem(index: number): IAction {
  return {
    type: "TOGGLE_ITEM",
    payload: index
  };
}

export function applyFilter(filterName: string): IAction {
  return {
    type: "APPLY_FILTER",
    payload: filterName
  };
}

export function initToDoList(): IAction {
  return {
    type: "INIT_TODO_LIST",
    payload: ""
  };
}
