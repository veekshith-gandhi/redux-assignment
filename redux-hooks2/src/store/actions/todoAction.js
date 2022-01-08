import { TODO_ACTIONS } from "../../constants/todoConstants";

export const addTodo = (payload) => (dispatch) => {
  try {
    dispatch({
      type: TODO_ACTIONS.ADD_TODO,
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};

export const delteTodo = (id) => (dispatch) => {
  try {
    dispatch({
      type: TODO_ACTIONS.DEL_TODO,
      payload: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const toggleTodo = (id) => (dispatch) => {
  try {
    dispatch({
      type: TODO_ACTIONS.TOG_TODO,
      payload: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
