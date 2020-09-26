import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Components/App/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './redux/sagas/sagaIndex';
import rootReducer from './redux/reducers/reducerIndex';

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? (
      compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
    : applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
