// Type Variables for Actions Functions and Reducer Cases
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";

// Action Functions
export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementByAmount = (number) => {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: number,
  };
};
