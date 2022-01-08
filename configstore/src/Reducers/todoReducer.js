import { TODO_ACTIONS } from "../Constants/index";
import { loadData, saveData } from "../utili/LocalStorage";
const token = loadData("token") || null;

const initState = {
  todos: [],
  isLoading: true,
  isError: false,
  isAuth: !!token,
  token: token,
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_ACTIONS.LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
      };
    }
    case TODO_ACTIONS.LOGOUT_SUCCESS:
      saveData("token", action.payload.token);
      return {
        ...state,
        isAuth: false,
        token: action.payload.token,
      };
    case TODO_ACTIONS.GET_TODO:
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false,
      };
    case TODO_ACTIONS.FAILUR_TODO:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case TODO_ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isLoading: false,
      };
    case TODO_ACTIONS.DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case TODO_ACTIONS.TOGGLE_TODO:
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

// @connection(maps.listenToStores, maps.getStateFromStores
