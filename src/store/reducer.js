import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "./action";
import { storeState } from "./state";

export const counterReducer = (state = storeState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + 1 };
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case INCREMENT_BY_AMOUNT: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
