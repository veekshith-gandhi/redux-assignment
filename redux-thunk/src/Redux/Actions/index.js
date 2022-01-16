export const registerationAction = (payload) => (dispatch) => {
  return dispatch({
    type: "ADD_REGISTERATION",
    payload: payload,
  });
};
