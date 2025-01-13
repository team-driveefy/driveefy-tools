import React, { useEffect } from 'react';
import { Box, Typography, Paper, Stack, Button, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateTicketStatus, getAllCustomerTickets } from '../../../actions/TicketDashboardActions';

const IndividualTicketDetails = () => {
  const { ticketId } = useParams();
  const dispatch = useDispatch();
  const { allEmployees, loading } = useSelector((state) => state.TicketDashboard);

  useEffect(() => {
    if (!allEmployees.length) {
      dispatch(getAllCustomerTickets());
    }
  }, [dispatch, allEmployees.length]);

  const ticket = allEmployees.find(ticket => ticket.uniqueId === ticketId);

  const handleUpdateStatus = async () => {
    await dispatch(updateTicketStatus(ticket.uniqueId));
    dispatch(getAllCustomerTickets());
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!ticket) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h4">Ticket not found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Ticket Details
        </Typography>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Name:</Typography>
            <Typography>{ticket.firstName+" "+ticket.lastName}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Customer Id</Typography>
            <Typography>{ticket.uniqueId}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Email:</Typography>
            <Typography>{ticket.email}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Phone Number:</Typography>
            <Typography>{ticket.phoneNumber}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Description:</Typography>
            <Typography>{ticket.description}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Status:</Typography>
            <Typography>{ticket.isResolved ? 'Resolved' : 'Unresolved'}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Mail Status:</Typography>
            <Typography>{ticket.mailSendStatus ? 'Sent' : 'Not Sent'}</Typography>
          </Stack>
          <Button variant="contained" color="primary" onClick={handleUpdateStatus}>
            {ticket.isResolved ? 'Reopen Ticket' : 'Close Ticket'}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default IndividualTicketDetails;