import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, CircularProgress, Tabs, Tab, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { updateTicketStatus, getAllCustomerTickets } from '../../../actions/TicketDashboardActions';
const TicketTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const { allEmployees, loading } = useSelector((state) => state.TicketDashboard);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const successfulClosureMail = async (ticket) => {
    await dispatch(updateTicketStatus(ticket.uniqueId));
    dispatch(getAllCustomerTickets());
  };
  
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const handleRowClick = (ticketId) => {
    navigate(`/CustomerTickets/${ticketId}`);
  };

  
  const resolvedTickets = allEmployees.filter(employee => employee.isResolved);
  const unresolvedTickets = allEmployees.filter(employee => !employee.isResolved);

  return (
    loading ? 
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box> :   
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Tickets">
          <Tab label="Unresolved Tickets" />
          <Tab label="Resolved Tickets" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TableContainer component={Paper}>
            <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableRow>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Sno.</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Customer ID</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Email</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Phone Number</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Description</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Mail Status</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Actions</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {unresolvedTickets.length === 0 ?
                <TableRow>
                <TableCell colSpan={5}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', fontSize: '1.5rem' }}>
                    No Unresolved Tickets
                  </Box>
                </TableCell>
              </TableRow> 
                : unresolvedTickets.map((ticket, index) => (
                  <TableRow key={ticket.uniqueId} onClick={() => handleRowClick(ticket.uniqueId)} style={{ cursor: 'pointer' }}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{ticket.firstName + ' ' + ticket.lastName}</TableCell>
                    <TableCell>{truncateDescription(ticket.uniqueId, 8)}</TableCell>
                    <TableCell>{ticket.email}</TableCell>
                    <TableCell>{ticket.phoneNumber}</TableCell>
                    <TableCell>{truncateDescription(ticket.description, 20)}</TableCell>
                    <TableCell>
                    {ticket.mailSendStatus ? (
                          <CheckCircleIcon sx={{ color: 'green' }} />
                        ) : (
                          <CancelIcon sx={{ color: 'red' }} />
                    )}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={(e) => {e.stopPropagation(); successfulClosureMail(ticket)}}>Close Ticket</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableRow>
                   <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Sno.</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Name</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Customer ID</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Email</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Phone Number</TableCell>
                    <TableCell sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Description</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {resolvedTickets.map((ticket, index) => (
                  <TableRow key={ticket.uniqueId}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{ticket.firstName + ' ' + ticket.lastName}</TableCell>
                    <TableCell>{truncateDescription(ticket.uniqueId, 8)}</TableCell>
                    <TableCell>{ticket.email}</TableCell>
                    <TableCell>{ticket.phoneNumber}</TableCell>
                    <TableCell>{truncateDescription(ticket.description, 20)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default TicketTable;
