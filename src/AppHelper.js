import getAuthToken from './redux/actions';

export const appState = state => ({
  auth: state.auth,
});

export const appDispatch = dispatch => ({
  getAuthToken: () => dispatch(getAuthToken()),
});

export default appState;