const DECREASE = 'DECRASE';
const INCREASE = 'INCREASE';
const RESET = 'RESET';

export { DECREASE, INCREASE, RESET };

// export const CounterAction = (dispatch) => {
//   return {
//     increase: () => dispatch({ type: INCREASE }),
//     decrease: () => dispatch({ type: DECREASE }),
//     reset: () => dispatch({ type: RESET }),
//   };
// };

export const CounterAction = {
  increase: () => ({
    type: INCREASE,
  }),
  decrease: () => ({ type: DECREASE }),
  reset: () => ({ type: RESET }),
};
