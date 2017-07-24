import React from 'react';
import { compose, withState, defaultProps, withHandlers } from 'recompose';
import Snackbar from 'material-ui/Snackbar';
import Form from './Form';

const enhance = compose(
  withState('isOpen', 'toggleOpen', true),
  withHandlers({
    handleTouchTap: ({ isOpen }, { toggleOpen }) => () => toggleOpen(!isOpen)
  })
);

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
      <Form />
    </div>
  );
};

export default enhance(Signin);
