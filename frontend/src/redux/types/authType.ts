import { IUser } from 'utils/Typescript';

export interface IAuthResponse {
  access_token?: string;
  user?: IUser;
  error?: string;
}

export interface IAuth {
  loading?: boolean;
  userInfo?: IAuthResponse;
  error?: IAuthResponse;
}

export interface IAuthType {
  type: string;
  payload: IAuthResponse;
}

export interface IRegister {
  loading?: boolean;
  info?: IRegisterResponse;
  error?: IRegisterResponse;
}

export interface IRegisterType {
  type: string;
  payload: IRegisterResponse;
}

export interface IRegisterResponse {
  msg?: string;
  errors?: string[];
}

export interface IForgotPassword {
  loading?: boolean;
  info?: IForgotResponse;
  error?: IForgotResponse;
}

export interface IForgotResponse {
  msg?: string;
}
