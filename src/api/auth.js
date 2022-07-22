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

  return res;
};


export const userLogin = async ({
  email,password
}) => {
  const res = await request.post('/users/login',{email,password})
  return res;
}