import {
  userLoginReducer,
  userRegisterReducer,
  userForgotPasswordReducer,
} from './userReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userForgot: userForgotPasswordReducer,
});
