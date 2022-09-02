import axios from 'axios';
import qs from 'qs';
const BASE_URL = 'https://nike-clone-ryan.herokuapp.com/api';

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  params: {},
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  },
});

request.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('tokenId');

    if (typeof token !== 'string' || !token) return config;

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error) {
      console.log(error);
    }

    return Promise.reject(error);
  }
);

export default request;
