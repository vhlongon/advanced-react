import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import TextField from './TextField';
import { changeAuth } from '../../actions/authenticate';
import validate from './validate';
import { getIsAuthenticated } from '../../selectors';

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
  submitForm
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

export const formWithRouter = withRouter(
  reduxForm({
    form: 'syncValidation',
    validate
  })(SigninForm)
);

const mapStateToProps = getIsAuthenticated;

export default connect(mapStateToProps, { changeAuth })(formWithRouter);
