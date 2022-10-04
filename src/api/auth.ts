import { JoinResp } from 'types/resp';
import request from './requestMethods';
interface User {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  birthOfDate: string;
  gender: string;
}
type LoginParam = Pick<User, 'email' | 'password'>;
export const userJoin = async ({
  email,
  password,
  passwordCheck,
  name,
  phone,
  birthOfDate,
  gender,
}: User) => {
  const res = await request.post<JoinResp>('/users', {
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

export const userLogin = async ({ email, password }: LoginParam) => {
  const res = await request.post('/users/login', { email, password });
  return res;
};
