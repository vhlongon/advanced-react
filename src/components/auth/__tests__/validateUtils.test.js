import * as utils from '../validateUtils';

describe('validateUtils', () => {
  describe('displayError', () => {
    describe('when the validation does pass', () => {
      it('outputs an empty string', () => {
        const input = { prop: 'prop' };
        const message = 'Required';
        const condition = utils.hasValue(input, 'prop');
        expect(utils.displayError(condition, message)).toBe('');
      });
    });
    describe('when the validation does not pass', () => {
      it('outputs the error message provided', () => {
        const input = { prop: '' };
        const message = 'Required';
        const condition = utils.hasValue(input, 'prop');
        expect(utils.displayError(condition, message)).toBe(message);
      });
    });
  });
  describe('isEmailValid', () => {
    describe('when email does not have valid format', () => {
      it('returns false', () => {
        expect(utils.isEmailValid('invalidemail')).toBeFalsy();
        expect(utils.isEmailValid('invalid@email')).toBeFalsy();
        expect(utils.isEmailValid('invalid email')).toBeFalsy();
        expect(utils.isEmailValid('invalid.email')).toBeFalsy();
        expect(utils.isEmailValid('invalid@email.')).toBeFalsy();
      });
    });
    describe('when email has valid format', () => {
      it('returns true', () => {
        expect(utils.isEmailValid('email@email.com')).toBeTruthy();
      });
    });
  });

  describe('hasMinLength', () => {
    describe('when input does have at least the given length', () => {
      it('return true', () => {
        expect(utils.hasMinLength('abc', 3)).toBeTruthy();
      });
    });
    describe('when input doesnt have at least the given length', () => {
      it('return false', () => {
        expect(utils.hasMinLength('abc', 6)).toBeFalsy();
      });
    });
  });

  describe('hasValue', () => {
    describe('when prop is undefined or empty', () => {
      it('returns false', () => {
        const input = { prop: '' };
        expect(utils.hasValue(input, 'prop')).toBeFalsy();
      });
    });
    describe('when prop exists', () => {
      it('returns true', () => {
        const input = { prop: 'prop' };
        expect(utils.hasValue(input, 'prop')).toBeTruthy();
      });
    });
  });

  describe('propsMatch', () => {
    describe('when there is match', () => {
      it('returns true', () => {
        expect(utils.propsMatch('1', '1')).toBeTruthy();
      });
    });
    describe('when there is no match', () => {
      it('returns false', () => {
        expect(utils.propsMatch('1', '')).toBeFalsy();
      });
    });
  });
});
