
import { Route, Routes } from 'react-router-dom';
import TicketDashboard from '../Tools/CustomerTickets/TicketDashboard';
import IndividualTicketDetails from '../Tools/CustomerTickets/components/IndividualTicketDeatils';
import Home from "../Tools/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CustomerTickets" element={<TicketDashboard />} />
      <Route path="/CustomerTickets/:ticketId" element={<IndividualTicketDetails />} />
    </Routes>
  );
};

export default AllRoutes;
