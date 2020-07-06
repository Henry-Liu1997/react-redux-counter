import { SET_LOADING, GET_WEATHER } from './action';

const defaultState = {
  loading: true,
  data: [],
};

export default function reducer(state = defaultState, action) {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === GET_WEATHER) {
    return {
      ...state,
      loading: action.payload.loading,
      data: action.payload.data,
    };
  }
  return state;
}
