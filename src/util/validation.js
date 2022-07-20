export const validateEmail = (email) => {
  const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  if (email) {
    if (!reg.test(email)) {
      return '이메일 형태로 입력해주세요.';
    }
  }
  return '';
};
