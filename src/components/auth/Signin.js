import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import Form from './Form';
import { signinSubmit } from '../../actions/authenticate';
import { getIsAuthenticated } from '../../selectors';

const enhance = compose(
  withState('isOpen', 'toggleOpen', true),
  withHandlers({
    handleTouchTap: ({ isOpen }, { toggleOpen }) => () => toggleOpen(!isOpen)
  })
);

const submitForm = (values, dispatch) => {
  dispatch(signinSubmit(values));
};

export const Signin = props => {
  const { location: { state }, handleTouchTap, isOpen } = props;
  return (
    <div>
      {state &&
        <Snackbar
          open={isOpen}
          className="signin__message"
          message={state.message}
          onActionTouchTap={handleTouchTap}
        />}
      <Form submitForm={submitForm} />
    </div>
  );
};

const mapStateToProps = getIsAuthenticated;

export default connect(mapStateToProps)(enhance(Signin));
