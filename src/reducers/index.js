import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  form
});

export default rootReducer;
