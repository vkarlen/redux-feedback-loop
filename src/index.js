import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Default object for feedbackReducer
const defaultFeedback = {
  feeling: '',
  understanding: '',
  supported: '',
  comments: '',
};

// Reducer to handle all Feedback inputs
const feedbackReducer = (state = defaultFeedback, action) => {
  switch (action.type) {
    case 'UPDATE_FEEDBACK':
      return { ...state, [action.payload]: action.payload };
    case 'CLEAR_FEEDBACK':
      return defaultFeedback;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
