import { userLoginReducer, userRegisterReducer } from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
