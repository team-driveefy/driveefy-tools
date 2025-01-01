import TicketTable from "./components/TicketTable";
import { getAllCustomerTickets } from "../../actions/TicketDashboardActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TicketDashboard = () => {
  const {allEmployees} = useSelector((state) => state.TicketDashboard);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCustomerTickets());
  },[dispatch])

  console.log(allEmployees)

  return (
    <div>
      <TicketTable />
    </div>
  );
};

export default TicketDashboard;
