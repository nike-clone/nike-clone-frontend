import axios from 'axios';
import request from './requestMethods';

export const userJoin = async ({
  email,
  password,
  passwordCheck,
  name,
  phone,
  birthOfDate,
  gender,
}) => {
  const res = await request.post('/users', {
    email,
    password,
    passwordCheck,
    name,
    phone,
    birthOfDate,
    gender,
  });
  console.log('a', res);
  console.log('b', res.data);
  return res;
};
