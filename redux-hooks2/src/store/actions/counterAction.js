import { COUNTER_ACTION } from "../../constants/counterConstants";

export const increment = (value) => (dispatch) => {
  return dispatch({
    type: COUNTER_ACTION.INCREMENT,
    payload: value,
  });
};

export const decrement = (value) => (dispatch) => {
  return dispatch({
    type: COUNTER_ACTION.DECREMENT,
    payload: value,
  });
};
