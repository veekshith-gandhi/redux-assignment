import { TODO_ACTIONS } from "../../constants/todoConstants";

const init = {
  todos: [
    {
      id: 1,
      name: "veekshith",
      status: false,
    },
  ],
};

export const todoReducer = (state = init, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODO_ACTIONS.DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case TODO_ACTIONS.TOG_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        ),
      };

    default:
      return state;
  }
};
