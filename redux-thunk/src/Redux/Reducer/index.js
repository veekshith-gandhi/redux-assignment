const init = {
  user: [],
};

export const registerationReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_REGISTERATION":
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    default:
      return state;
  }
};
