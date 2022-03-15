import userAPI from 'api/userAPI';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegister } from 'utils/Typescript';
import { validateEmail, validRegister } from 'utils/Valid';
import {
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from './../constants/userConstant';

export const login = (userLogin: IUserLogin) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const data = await userAPI.login(userLogin);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (err: any) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err,
    });
  }
};

export const register =
  (userRegister: IUserRegister) => async (dispatch: Dispatch) => {
    const check = validRegister(userRegister);

    if (check.errLength > 0) {
      return dispatch({
        type: USER_REGISTER_FAIL,
        payload: { errors: check.errMsg },
      });
    }

    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const { cf_password, ...others } = userRegister; //tách ko lấy cf_password

      const data = await userAPI.register({ ...others });

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({ type: USER_REGISTER_FAIL, payload: { errors: err } });
    }
  };

export const forgotPassword =
  (account: string) => async (dispatch: Dispatch) => {
    const check = validateEmail(account);

    if (!check) {
      return dispatch({
        type: USER_FORGOT_PASSWORD_FAIL,
        payload: { msg: 'Email format is incorrect.' },
      });
    }
    try {
      dispatch({ type: USER_FORGOT_PASSWORD_REQUEST });

      const data = await userAPI.forgotPassword({ account });
      console.log(data);

      dispatch({
        type: USER_FORGOT_PASSWORD_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      console.log('payload err: ', err);
      dispatch({ type: USER_FORGOT_PASSWORD_FAIL, payload: err });
    }
  };

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
