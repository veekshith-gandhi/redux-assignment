import { combineReducers, createStore } from "redux";
import { registerationReducer } from "../Reducer";

const reducers = combineReducers({
  user: registerationReducer,
});

export const store = createStore(reducers);

console.log(store);
