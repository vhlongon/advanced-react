import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { addFormSubmitSagaTo } from 'redux-form-submit-saga';
import App from './components/App';
import reducers from './reducers';
import sagas from './sagas';
import { getItemFromLocalStorate } from './sagas/utils';
import registerServiceWorker from './registerServiceWorker';
import theme from './theme';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap (material-ui)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const preloadedState = {
  auth: {
    isAuthenticated: getItemFromLocalStorate() ? true : null
  }
};
const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
const rootSaga = addFormSubmitSagaTo(sagas);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
