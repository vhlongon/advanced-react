import validate, { checkIfEmailIsValid } from '../validate';

const generateInput = ({ email = '', password = '' }) => ({ email, password });

describe('validate form', () => {
  describe('checkIfEmailIsValid', () => {
    describe('when email does not have valid format', () => {
      it('returns false', () => {
        expect(checkIfEmailIsValid('invalidemail')).toBeFalsy();
        expect(checkIfEmailIsValid('invalid@email')).toBeFalsy();
        expect(checkIfEmailIsValid('invalid email')).toBeFalsy();
        expect(checkIfEmailIsValid('invalid.email')).toBeFalsy();
        expect(checkIfEmailIsValid('invalid@email.')).toBeFalsy();
      });
    });
    describe('when email has valid format', () => {
      it('returns true', () => {
        expect(checkIfEmailIsValid('email@email.com')).toBeTruthy();
      });
    });
  });

  describe('when email is not valid', () => {
    it('returns email format validation error', () => {
      expect(validate(generateInput({ email: 'invalid email' }))).toEqual({
        email: 'Invalid email address',
        password: 'Required'
      });
    });
  });
});
