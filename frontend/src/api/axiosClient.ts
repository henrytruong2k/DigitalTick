import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const SERVER_URL = 'http://localhost:5000';

const axiosClient = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig<any>) {
    const access_token = localStorage.getItem('access_token');

    if (access_token && config.headers) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error.response.data.msg);
  }
);

export default axiosClient;
