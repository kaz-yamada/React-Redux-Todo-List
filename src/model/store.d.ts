export interface IReduxStore {
  toDos: IToDoStore;
}

export interface IToDoStore {
  toDoList: IToDoItem[];
  newItem: string;
  filter: string;
}

export interface IToDoItem {
  value: string;
  status: boolean;
}

export interface IAction {
  type: any;
  payload: any;
}
