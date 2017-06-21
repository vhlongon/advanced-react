export default ({ dispatch }) => {
  return next => action => {
    console.log(action);

    next(action);
  }
}