export default ({ dispatch }) => {
  return next => action => {
    // if action does not a payload or if the payload does not have a .then method
    // we don't care about it, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // make sure the action's promise resolves
    // if promise resolves create a new action with all the props from the original action,
    // plus the response returned from the promise as the payload instead
    action.payload.then(response => dispatch({ ...action, payload: response }));
  };
};
