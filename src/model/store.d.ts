export interface IReduxStore {
  toDos: IToDoStore;
}

export interface ITodoList {
  [key: string]: IToDoItem;
}
export interface IToDoStore {
  toDoList: ITodoList;
  filterType: string;
}

export interface IToDoItem {
  id: string;
  value: string;
  isCompleted: boolean;
}

export interface IAction {
  type: any;
  payload: any;
}
