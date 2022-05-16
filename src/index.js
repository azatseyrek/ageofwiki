import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
import reducer from './redux/reducers';

// router
import PageRoutes from './routes/PageRoutes';
// styles
import './styles/index.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PageRoutes />
    </React.StrictMode>
  </Provider>,
);
