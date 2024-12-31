import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TicketDashboard from '../Tools/CustomerTickets/TicketDashboard';
import Home from "../Tools/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CustomerTickets" element={<TicketDashboard />} />
    </Routes>
  );
};

export default AllRoutes;
