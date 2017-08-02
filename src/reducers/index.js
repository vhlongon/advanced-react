import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import usersReducer from './users';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  form,
  users: usersReducer
});

export default rootReducer;
