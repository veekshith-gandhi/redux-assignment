import { COUNTER_ACTION } from "../../constants/counterConstants";

const init = {
  counter: 10,
};
export const counterReducer = (state = init, action) => {
  switch (action.type) {
    case COUNTER_ACTION.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case COUNTER_ACTION.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      return state;
  }
};
