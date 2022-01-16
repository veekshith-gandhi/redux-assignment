import axios from "axios";

export const registerationAction = (payload) => async (dispatch) => {
  try {
    await axios.post("http://localhost:3030/user", payload);
    return dispatch({
      type: "ADD_REGISTERATION",
      payload: payload,
    });
  } catch (error) {
    console.log(error);
  }
};
