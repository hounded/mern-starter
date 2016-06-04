import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import user from './modules/User/UserReducer';

export default combineReducers({
  app,
  posts,
  user,
});
