import { IUser } from 'utils/Typescript';

export interface IAuthResponse {
  access_token?: string;
  user?: IUser;
  error?: string | string[];
}

export interface IAuth {
  loading?: boolean;
  userInfo?: IAuthResponse;
  error?: IAuthResponse;
}

export interface IAuthType {
  type: string; //type of USER_LOGIN_REQUEST,...
  payload: IAuthResponse;
}
