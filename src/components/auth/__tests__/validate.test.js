import validate, {
  displayError,
  hasMinLength,
  hasValue,
  isEmailValid
} from '../validate';

const generateInput = ({ email = '', password = '' } = {}) => ({
  email,
  password
});

describe('validate form', () => {
  describe('utils', () => {
    describe('displayError', () => {
      describe('when the validation does pass', () => {
        it('outputs the error message provided', () => {
          const input = { prop: 'prop' };
          const message = 'Required';
          const condition = hasValue(input, 'prop');
          expect(displayError(condition, message)).toBe('');
        });
      });
      describe('when the validation does not pass', () => {
        it('outputs an empty string', () => {
          const input = { prop: '' };
          const message = 'Required';
          const condition = hasValue(input, 'prop');
          expect(displayError(condition, message)).toBe(message);
        });
      });
    });
    describe('isEmailValid', () => {
      describe('when email does not have valid format', () => {
        it('returns false', () => {
          expect(isEmailValid('invalidemail')).toBeFalsy();
          expect(isEmailValid('invalid@email')).toBeFalsy();
          expect(isEmailValid('invalid email')).toBeFalsy();
          expect(isEmailValid('invalid.email')).toBeFalsy();
          expect(isEmailValid('invalid@email.')).toBeFalsy();
        });
      });
      describe('when email has valid format', () => {
        it('returns true', () => {
          expect(isEmailValid('email@email.com')).toBeTruthy();
        });
      });
    });

    describe('hasMinLength', () => {
      describe('when input does have at least the given length', () => {
        it('return true', () => {
          expect(hasMinLength('abc', 3)).toBeTruthy();
        });
      });
      describe('when input doesnt have at least the given length', () => {
        it('return false', () => {
          expect(hasMinLength('abc', 6)).toBeFalsy();
        });
      });
    });

    describe('hasValue', () => {
      describe('when prop is undefined or empty', () => {
        it('returns true', () => {
          const input = { prop: '' };
          expect(hasValue(input, 'prop')).toBeFalsy();
        });
      });
      describe('when prop exists', () => {
        it('returns false', () => {
          const input = { prop: 'prop' };
          expect(hasValue(input, 'prop')).toBeTruthy();
        });
      });
    });
  });

  describe('when input is valid', () => {
    it('returns empty for email and password ', () => {
        expect(
          validate(
            generateInput({ email: 'valid@email.com', password: 'password' })
          )
        ).toEqual({
          password: '',
          email: ''
        });
      });
  });
  describe('when input is not valid', () => {
    describe('no email', () => {
      it('returns Required for email', () => {
        expect(validate(generateInput({ password: 'password' }))).toEqual({
          email: 'Required',
          password: ''
        });
      });
    });
    describe('no password', () => {
      it('returns Required for password', () => {
        expect(validate(generateInput({ email: 'valid@email.com' }))).toEqual({
          password: 'Required',
          email: ''
        });
      });
    });
    describe('no email and no password', () => {
      it('returns Required for both', () => {
        expect(validate(generateInput())).toEqual({
          email: 'Required',
          password: 'Required'
        });
      });
    });
    describe('invalid email', () => {
      it('returns invalid email', () => {
        expect(
          validate(
            generateInput({ email: 'invalid email', password: 'password' })
          )
        ).toEqual({
          email: 'Invalid email',
          password: ''
        });
      });
    });

    describe('invalid (too short) passord', () => {
      it('returns invalid password', () => {
        expect(
          validate(
            generateInput({ email: 'valid@email.com', password: 'pass' })
          )
        ).toEqual({
          password: 'Must be at least 6',
          email: ''
        });
      });
    });
  });
  
  
});
