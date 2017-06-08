import { combineReducers } from 'redux';
import comments from './comments';

const rootReducer = combineReducers({
  comments: comments
});

export default rootReducer;
