import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  auth: authReducer
});

export default rootReducer;
