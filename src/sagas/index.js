import { delay } from 'redux-saga';
import { all, call, select, takeEvery } from 'redux-saga/effects';
import { CHANGE_AUTH } from '../actions/types';
import history from '../history';
import { paths } from '../components/Routes';

// selectors
const getIsAuthenticated = state => state.auth.isAuthenticated;

// request config stuff
const ROOT_URL = 'http://localhost:3090';

const sendData = (data, url) =>
  new Promise((resolve, reject) => {
    fetch(url, { method: 'POST', body: data })
      .then(blob => blob.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
// if request is good...
// Update state to indicate user is authenticated
// Save the JWT token sent back from the server
// -----
// if request is bad...
// Show error message to user

export function* authChange() {
  const isAuthenticated = yield select(getIsAuthenticated);
  
  yield delay(500);
  // const data = new FormData({email, password})

  if (isAuthenticated) {
    yield call(history.push, paths.resources);
  }
}

export function* watchAuthChange() {
  yield takeEvery(CHANGE_AUTH, authChange);
}

export default function* sagas() {
  yield all([watchAuthChange()]);
}
