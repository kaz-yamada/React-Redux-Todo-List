import logger from "redux-logger";
import toDos from "./todoReducer";

import { applyMiddleware, combineReducers, createStore } from "redux";

let middleware = {};

if (process.env.NODE_ENV !== "production") {
  middleware = applyMiddleware(logger);
}

const reducers = combineReducers({ toDos });

export const store = createStore(reducers, middleware);
