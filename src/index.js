import React from 'react';
import ReactDOM from 'react-dom/client';
// redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './redux/reducers';

// router
import PageRoutes from './routes/PageRoutes';
// styles
import './styles/index.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PageRoutes />,
  </Provider>,
);
