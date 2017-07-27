import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import Form from './Form';
import { changeAuth } from '../../actions/authenticate';

const enhance = compose(
  withState('isOpen', 'toggleOpen', true),
  withHandlers({
    handleTouchTap: ({ isOpen }, { toggleOpen }) => () => toggleOpen(!isOpen)
  })
);

const submitForm = authenticate => values => {
  authenticate();
  // authenticate(
  //   !isAuthenticated,
  //   () => !isAuthenticated && history.push(paths.resources)
  // );
};

export const Signin = props => {
  const { location: { state }, handleTouchTap, isOpen, changeAuth } = props;
  return (
    <div>
      {state &&
        <Snackbar
          open={isOpen}
          className="signin__message"
          message={state.message}
          onActionTouchTap={handleTouchTap}
        />}
      <Form submitForm={submitForm(changeAuth)} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated
});

export default connect(mapStateToProps, { changeAuth })(
  enhance(Signin)
);
