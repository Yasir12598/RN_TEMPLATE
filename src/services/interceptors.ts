import axios, { AxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import store from '@store/index';
import { Toast } from 'react-native-toast-notifications';
import { api } from '.';
import { TOAST_TYPES } from '@config/constants';
import { config } from '@config/index';
import { changeLoginUserData } from '@modules/auth/store/authSlice';

export const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = store.getState()?.auth?.loginUserData?.token;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response) {
      const errorMessage =
        (error.response.data as { message?: string })?.message ||
        'Somthing Went Wrong!!';
      Toast.show(errorMessage, {
        type: TOAST_TYPES.DANGER,
      });
      const status = error.response.status;

      if (status === StatusCodes.UNAUTHORIZED) {
        // token is expired we will handle the refresh token here
        store.dispatch(changeLoginUserData(undefined));
        store.dispatch(api.util.resetApiState());
        Toast.show('Session expire! Please login again.');

        return error;
      } else if (status === StatusCodes.NOT_FOUND) {
      }
    }
    return Promise.reject(error);
  }
);
