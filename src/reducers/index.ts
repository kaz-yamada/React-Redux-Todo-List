import logger from "redux-logger";
import toDos from "./todoReducer";

import { applyMiddleware, combineReducers, createStore } from "redux";

const middleware = applyMiddleware(logger);
const reducers = combineReducers({ toDos });

export const store = createStore(reducers, middleware);
