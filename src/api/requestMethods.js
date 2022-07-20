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
    const token = localStorage.getItem({ key: 'token', defaultValue: '' });
    if (token) {
      config.headers = {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
    } else {
      return config;
    }

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
    console.log('err', error);
    return Promise.reject();
  }
);

export default request;
