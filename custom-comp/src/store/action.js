export const increment = (value) => (dispatch) => {
  try {
    return dispatch({
      type: "INCREMENT",
      payload: value,
    });
  } catch (error) {
    console.log(error);
  }
};
export const decrement = (value) => (dispatch) => {
  try {
    return dispatch({
      type: "DECREMENT",
      payload: value,
    });
  } catch (error) {
    console.log(error);
  }
};
