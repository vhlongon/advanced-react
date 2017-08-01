import React from 'react';
import SignupForm from './SignupForm';

const submitForm = (values, dispatch) => {
  //dispatch(signinSubmit(values));
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
