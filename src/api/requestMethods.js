import axios from 'axios';

const BASE_URL = 'https://nike-clone-ryan.herokuapp.com/api';

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem({
      key: 'tokenId',
      defaultValue: '',
    });

    if (typeof token !== 'string' || !token) return config;

    config.headers = {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

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