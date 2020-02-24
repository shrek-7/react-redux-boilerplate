import GET_AUTH_TOKEN from '../actions/types';

const INITIAL_STATE = {
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_AUTH_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};