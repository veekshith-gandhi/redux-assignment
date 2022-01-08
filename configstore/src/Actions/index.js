import axios from "axios";
import { TODO_ACTIONS } from "../Constants";

export const loginSuccessAction = (token) => {
  return {
    type: TODO_ACTIONS.LOGIN_SUCCESS,
    payload: {
      token: token,
    },
  };
};
export const logoutSuccessAction = (token) => (dispatch) => {
  return dispatch({
    type: TODO_ACTIONS.LOGOUT_SUCCESS,
    payload: {
      token: token,
    },
  });
};

export const addTodoAction = (input) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:8080/todos", input);

    dispatch({
      type: TODO_ACTIONS.ADD_TODO,
      payload: data,
    });
  } catch (error) {
    failurTodoAction()(dispatch);
  }
};
export const delTodoAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/todos/${id}`);
    dispatch({
      type: TODO_ACTIONS.DEL_TODO,
      payload: { id: id },
    });
  } catch (error) {
    failurTodoAction()(dispatch);
  }
};
export const toggleTodoAction = (id, currentState) => async (dispatch) => {
  try {
    await axios.patch(`http://localhost:8080/todos/${id}`, {
      status: !currentState,
    });
    dispatch({
      type: TODO_ACTIONS.TOGGLE_TODO,
      payload: { id: id },
    });
  } catch (error) {
    failurTodoAction()(dispatch);
  }
};

export const getTodoAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8080/todos");

    dispatch({
      type: TODO_ACTIONS.GET_TODO,
      payload: {
        todos: data,
      },
    });
  } catch (error) {
    failurTodoAction()(dispatch);
  }
};

export const failurTodoAction = () => (dispatch) =>
  dispatch({
    type: TODO_ACTIONS.FAILUR_TODO,
    payload: {
      isError: true,
    },
  });
