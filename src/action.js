// count actions
const DECREASE = 'DECRASE';
const INCREASE = 'INCREASE';
const RESET = 'RESET';

export { DECREASE, INCREASE, RESET };

// modal actions
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';
export { MODAL_OPEN, MODAL_CLOSE };

// product actions
export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCTS = 'GET_PRODUCTS';

// action creators
export const decrease = () => ({
  type: DECREASE,
});

export const increase = () => ({
  type: INCREASE,
});

export const reset = () => ({
  type: RESET,
});

export const modalOpen = (name, text) => {
  return {
    type: MODAL_OPEN,
    payload: { name, text },
  };
};
