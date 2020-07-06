import axios from 'axios';

// count actions
const DECREASE = 'DECRASE';
const INCREASE = 'INCREASE';
const RESET = 'RESET';

export { DECREASE, INCREASE, RESET };

// modal actions
const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';
export { MODAL_OPEN, MODAL_CLOSE };

// get weather actions
export const SET_LOADING = 'SET_LOADING';
export const GET_WEATHER = 'GET_WEATHER';

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

export const getWeather = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/group?',
      {
        params: {
          id: '5128581,1816670',
          units: 'imperial',
          appid: process.env.REACT_APP_KEY,
        },
      }
    );

    dispatch({
      type: GET_WEATHER,
      payload: { loading: false, data: response.data.list },
    });
  } catch (error) {
    console.log(error);
  }
};
