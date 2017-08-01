import React from 'react';
import SignupForm from './SignupForm';
import { signupSubmit } from '../../actions/authenticate';

const submitForm = (values, dispatch) => {
  dispatch(signupSubmit(values));
  console.log(values);
};
const Signup = () => {
  return (
    <div>
      <SignupForm submitForm={submitForm} />
    </div>
  );
};

export default Signup;
