import axios, { AxiosInstance } from 'axios';

import { API } from '../constants';

const setupAxios = (url: string) => {
  const instance: AxiosInstance = axios.create({
    baseURL: url,
  });

  return instance;
};

export const bffAxios = setupAxios(API);
