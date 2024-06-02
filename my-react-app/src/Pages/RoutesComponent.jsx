import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Requestsoffood from './Pages/Requestsoffood';
import RequestsofSchoolsupplies from './Pages/RequestsofSchoolsupplies';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/food" element={<Requestsoffood />} />
      <Route path="/school-supplies" element={<RequestsofSchoolsupplies />} />
    </Routes>
  );
};

export default RoutesComponent;
