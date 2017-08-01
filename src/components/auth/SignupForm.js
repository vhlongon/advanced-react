import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import TextField from './TextField';
import ErrorMessage from '../ErrorMessage';
import validate from './signupValidate';
import { getSigninError } from '../../selectors';
import { clearForm } from '../../actions/authenticate';

const formStyle = {
  width: 'calc(100% - 2em)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em'
};

export const SignupForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  submitForm,
  errorMessage,
  clearForm
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
            clearForm();
            reset();
          }}
        />
      </div>
    </form>
  );
};

const mapStateToProps = getSigninError;

export const formWithRouter = withRouter(
  reduxForm(
    {
      form: 'SignupForm',
      validate
    },
    mapStateToProps
  )(SignupForm)
);

export default connect(mapStateToProps, { clearForm })(formWithRouter);
