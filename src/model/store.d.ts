export interface IReduxStore {
  toDos: IToDoStore;
}

export interface IToDoStore {
  toDoList: IToDoItem[];
  newItem: string;
  filterType: string;
}

export interface IToDoItem {
  id: number;
  value: string;
  status: boolean;
}

export interface IAction {
  type: any;
  payload: any;
}
