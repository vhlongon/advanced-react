export const checkIfEmailIsValid = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = 'Required';
  } else if (!checkIfEmailIsValid(email)) {
    errors.email = 'Invalid email address';
  }
  if (!password) {
    errors.password = 'Required';
  } else if (password.length < 6) {
    errors.password = 'Must be at least 6';
  }
  return errors;
};