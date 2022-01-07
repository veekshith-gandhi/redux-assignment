const init = { counter: 10 };

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }

    default:
      return state;
  }
};
