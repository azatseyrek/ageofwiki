import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import UnitDetailsPage from '../pages/UnitDetailsPage';
import UnitPage from '../pages/UnitPage';

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/units" element={<UnitPage />} />
          <Route path="/details">
            <Route path=":unitId" element={<UnitDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
