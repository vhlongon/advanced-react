import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App title="Advanced React and Redux - HOC" />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
