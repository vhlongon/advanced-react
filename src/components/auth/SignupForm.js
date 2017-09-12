import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { compose } from 'recompose';
import TextField from './TextField';
import ErrorMessage from '../ErrorMessage';
import validate from './signupValidate';
import { getSigninError } from '../../selectors';
import { clearFormError } from '../../actions/authenticate';

const formStyle = {
  width: 'calc(100% - 2em)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em',
};

export const SignupForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  submitForm,
  errorMessage,
  clearFormError,
}) => {
  return (
    <form style={formStyle} onSubmit={handleSubmit(submitForm)}>
      <Field name="email" type="text" label="Email" component={TextField} />
      <Field
        name="password"
        type="password"
        label="Password"
        component={TextField}
      />
      <Field
        name="passwordConfirm"
        type="password"
        label="Confirm password"
        component={TextField}
      />
      {errorMessage && <ErrorMessage text={errorMessage} />}
      <div>
        <RaisedButton
          type="submit"
          style={{ margin: '.5em' }}
          disabled={submitting}
          secondary
          label="Submit"
        />
        <RaisedButton
          type="button"
          style={{ margin: '.5em' }}
          disabled={pristine || submitting}
          label="Clear"
          onTouchTap={() => {
            clearFormError();
            reset();
          }}
        />
      </div>
    </form>
  );
};

const mapStateToProps = getSigninError;

const enhance = compose(
  withRouter,
  reduxForm(
    {
      form: 'SignupForm',
      validate,
    },
    mapStateToProps,
    { clearFormError }
  )
);

export default enhance(SignupForm);
