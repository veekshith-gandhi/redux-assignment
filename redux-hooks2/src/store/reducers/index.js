import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

export const reducer = combineReducers({
  todo: todoReducer,
  count: counterReducer,
});
