import {
  displayError,
  isEmailValid,
  hasMinLength,
  hasValue
} from './validateUtils';

const emailValidation = values => ({
  email: displayError(hasValue(values, 'email'), 'Required') ||
    displayError(isEmailValid(values.email), 'Invalid email')
});

const passwordValidation = values => ({
  password: displayError(hasValue(values, 'password'), 'Required') ||
    displayError(hasMinLength(values.password, 6), 'Must be at least 6')
});

const validateSignin = values => ({
  ...emailValidation(values),
  ...passwordValidation(values)
});

export default validateSignin;
