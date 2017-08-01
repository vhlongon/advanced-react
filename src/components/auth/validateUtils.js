export const displayError = (isValid, message) => (isValid ? '' : message);

export const isEmailValid = email =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const hasMinLength = (prop, minLength) =>
  (prop && prop.length >= minLength ? true : false);
  
export const hasValue = (obj, prop) => {
  return obj[prop] && obj[prop].length ? true : false;
};
