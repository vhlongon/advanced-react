import validate from '../signupValidate';

const generateInput = (
  { email = '', password = '', passwordConfirm = '' } = {}
) => ({
  email,
  password,
  passwordConfirm
});

describe('validate form', () => {
  describe('when input is valid', () => {
    it('returns empty for email and password ', () => {
      expect(
        validate(
          generateInput({
            email: 'valid@email.com',
            password: 'password',
            passwordConfirm: 'password'
          })
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
        expect(
          validate(
            generateInput({ password: 'password', passwordConfirm: 'password' })
          )
        ).toEqual({
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
            generateInput({
              email: 'invalid email',
              password: 'password',
              passwordConfirm: 'password'
            })
          )
        ).toEqual({
          email: 'Invalid email',
          password: ''
        });
      });
    });

    describe('invalid length passord', () => {
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

    describe('when password and confirm password do not match', () => {
      it('returns passwords must match', () => {
        expect(
          validate(
            generateInput({ email: 'valid@email.com', password: 'password' })
          )
        ).toEqual({
          password: 'Passwords must match',
          email: ''
        });
      });
    });
  });
});
