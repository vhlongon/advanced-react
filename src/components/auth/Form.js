import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import authenticate from '../../actions/authenticate';
import { paths } from '../Routes';

const validate = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!password) {
    errors.password = 'Required';
  } else if (password.length < 6) {
    errors.password = 'Must be at least 6';
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div style={{ padding: '.5em' }}>
    <TextField
      hintText={label}
      type={type}
      {...input}
      errorText={touched && error ? error : ''}
    />
  </div>
);

const formStyle = {
  width: 'calc(100% - 2em)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em'
};

const SyncValidationForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    authenticate,
    isAuthenticated,
    history
  } = props;
  const submitForm = values => {
    authenticate(
      !isAuthenticated,
      () => !isAuthenticated && history.push(paths.resources)
    );
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} style={formStyle}>
      <Field name="email" type="text" label="Email" component={renderField} />
      <Field
        name="password"
        type="password"
        label="Password"
        component={renderField}
      />
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
          onTouchTap={reset}
        />
      </div>
    </form>
  );
};

export const form = withRouter(reduxForm({
  form: 'syncValidation',
  validate
})(SyncValidationForm));

const mapStateToProps = ({ authenticated }) => ({
  isAuthenticated: authenticated
});

export default connect(mapStateToProps, { authenticate })(form);
