export const displayError = (isValid, message) => (isValid ? '' : message);
export const isEmailValid = email =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
export const hasMinLength = (prop, minLength) =>
  (prop && prop.length >= minLength ? true : false);
export const hasValue = (obj, prop) => {
  return obj[prop] && obj[prop].length ? true : false;
};

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
