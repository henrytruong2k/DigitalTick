import { IUserLogin } from 'utils/Typescript';
import axiosClient from './axiosClient';

const userAPI = {
  login(data: IUserLogin) {
    const url = '/api/login';
    return axiosClient.post(url, data);
  },
};

export default userAPI;
