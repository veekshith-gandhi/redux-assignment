import { compose, createStore, applyMiddleware } from "redux";
import { reducers } from "../Reducers";
// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const logerMidleWare = (store) => (next) => (action) => {
//   console.log("dispatch", action);
//   console.log(store.getState());
// };
// applyMiddleware(logerMidleWare)
export const store = createStore(reducers);
