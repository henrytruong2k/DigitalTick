import { userLoginReducer } from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  userLogin: userLoginReducer,
});
