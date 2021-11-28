export let counterReducer = {
  increment: (state) => {
    state.count++;
  },
  decrement: (state) => {
    state.count--;
  },
  incrementByAmount: (state, action) => {
    state.count += action.payload;
  },
};
