import { actionType } from "./actionType";

const initState = {
  todos: [
    {
      id: 1,
      title: "veek",
      description: "welcome hello",
      status: false,
    },
  ],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};
