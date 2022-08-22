import {
  validateBithDate,
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordCheck,
} from 'util/validation';

test('validation 검사 테스트', () => {
  expect(validateEmail('sss@sdsdsd.com')).toBe('');
  expect(validateBithDate('1991.11.11')).toBe('');
  expect(validateName('홍길동')).toBe('');
  expect(validatePassword('Abcde12#')).toBe('');
  expect(validatePasswordCheck('Abcde12#', 'Abcde12#')).toBe('');
});
