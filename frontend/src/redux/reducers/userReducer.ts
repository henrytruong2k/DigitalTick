import {
  IAuth,
  IAuthType,
  IRegister,
  IRegisterType,
} from './../types/authType';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from 'redux/constants/userConstant';

export const userLoginReducer = (
  state: IAuth = {},
  action: IAuthType
): IAuth => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      console.log('payload: ', action.payload);
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state: IRegister = {},
  action: IRegisterType
): IRegister => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, info: action.payload };
    case USER_REGISTER_FAIL:
      console.log('payload err: ', action.payload);
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
