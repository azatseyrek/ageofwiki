import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// router
import PageRoutes from './routes/PageRoutes';
// styles
import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageRoutes />
  </React.StrictMode>,
);
