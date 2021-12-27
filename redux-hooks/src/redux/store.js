import { combineReducers, createStore } from "redux";
import { todoReducer } from "./reducer";

export const rootReducer = combineReducers({ todo: todoReducer });

export const store = createStore(rootReducer);
