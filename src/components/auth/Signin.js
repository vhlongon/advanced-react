import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Snackbar from 'material-ui/Snackbar';
import Form from './Form';
import { paths } from '../Routes';

const enhance = compose(
  withState('isOpen', 'toggleOpen', true),
  withHandlers({
    handleTouchTap: ({ isOpen }, { toggleOpen }) => () => toggleOpen(!isOpen)
  })
);

const submitForm = (authenticate, isAuthenticated, history) => values => {
    console.log('submitForm', values)
    authenticate(
      !isAuthenticated,
      () => !isAuthenticated && history.push(paths.resources)
    );
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

export default enhance(Signin);
