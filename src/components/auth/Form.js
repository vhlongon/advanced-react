import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import TextField from './TextField';
import authenticate from '../../actions/authenticate';
import { paths } from '../Routes';
import validate from './validate';

const formStyle = {
  width: 'calc(100% - 2em)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em'
};

export const SigninForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  authenticate,
  isAuthenticated,
  history
}) => {
  const submitForm = values => {
    console.log(submitForm)
    authenticate(
      !isAuthenticated,
      () => !isAuthenticated && history.push(paths.resources)
    );
  };

  return (
    <form style={formStyle}>
      <Field name="email" type="text" label="Email" component={TextField} />
      <Field
        name="password"
        type="password"
        label="Password"
        component={TextField}
      />
      <div>
        <RaisedButton
          type="submit"
          style={{ margin: '.5em' }}
          disabled={submitting}
          secondary
          label="Submit"
          onTouchTap={handleSubmit(submitForm)}
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

export const formWithRouter = withRouter(
  reduxForm({
    form: 'syncValidation',
    validate
  })(SigninForm)
);

const mapStateToProps = ({ authenticated }) => ({
  isAuthenticated: authenticated
});

export default connect(mapStateToProps, { authenticate })(formWithRouter);
