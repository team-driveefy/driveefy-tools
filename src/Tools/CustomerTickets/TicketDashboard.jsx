import TicketTable from "./components/TicketTable";
import { getAllCustomerTickets } from "../../actions/TicketDashboardActions";
import { useEffect } from "react";
import { useDispatch} from "react-redux";

const TicketDashboard = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCustomerTickets());
  },[dispatch])


  return (
    <div>
      <TicketTable />
    </div>
  );
};

export default TicketDashboard;
