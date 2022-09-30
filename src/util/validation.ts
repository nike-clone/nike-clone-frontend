export const validateEmail = (email: string): string => {
  const reg: RegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  if (email) {
    if (!reg.test(email)) {
      return '이메일 형태로 입력해주세요.';
    }
  }
  return '';
};

export const validateBithDate = (birthOfDate: string): string => {
  const reg: RegExp = /^\d{4}\.\d{2}\.\d{2}$/;
  if (birthOfDate) {
    if (!reg.test(birthOfDate)) {
      return '정확한 생년월일을 입력하세요. 예) 2020.03.01';
    }
  }
  return '';
};

export const validatePhoneNumber = (phone: string): string => {
  const reg: RegExp = /^[0-9]*$/;
  if (phone) {
    if (!reg.test(phone)) {
      return '정확히 입력해 주세요';
    }
  }
  return '';
};

export const validateName = (name: string): string => {
  const reg: RegExp = /[ㄱ-ㅎㅏ-ㅣ가-힣|a-z|A-Z]+/;
  if (name) {
    if (!reg.test(name)) {
      return '한글과 영문만 입력 가능합니다.';
    }
  }
  return '';
};

export const validatePassword = (password: string): string => {
  const reg: RegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W])((?!\(|\)|\<|\>).){8,16}$/;
  if (password) {
    if (!reg.test(password)) {
      return '영문 대 소문+숫자+특수문자 8~16자리(특수문자 괄호(),<>는 사용불가)';
    }
  }
  return '';
};

export const validatePasswordCheck = (password: string, passwordCheck: string): string => {
  if (password) {
    if (password !== passwordCheck) {
      return '입력값이 일치하지 않습니다.';
    } else if (password === passwordCheck) {
      return '';
    }
  }
  return '';
};
