import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './../constants/userConstant';
import { Dispatch } from 'redux';
import { IUserLogin } from 'utils/Typescript';
import userAPI from 'api/userAPI';

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

export const logout = () => (dispatch: Dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};
