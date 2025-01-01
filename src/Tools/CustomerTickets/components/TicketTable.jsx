import { useState } from 'react';
import { Tabs, Tab, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { tableStyle } from '../../../Constant/tableStyle';
import PropTypes from 'prop-types';

const TicketTable = () => {
  const [value, setValue] = useState(0);
  
  const { TableStyle, StyledTableCell, TableHeaderStyle } = tableStyle;

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} style={TableStyle}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Unresolved Tickets" />
        <Tab label="Resolved Tickets" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={TableHeaderStyle}>Name</TableCell>
                <TableCell style={TableHeaderStyle}>Email</TableCell>
                <TableCell style={TableHeaderStyle}>Phone No</TableCell>
                <TableCell style={TableHeaderStyle}>Description</TableCell>
                <TableCell style={TableHeaderStyle}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Cell 1</TableCell>
                <TableCell>Cell 2</TableCell>
                <TableCell>Cell 3</TableCell>
                <TableCell>Cell 4</TableCell>
                <TableCell>Cell 5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={TableHeaderStyle}>Name</TableCell>
                <TableCell style={TableHeaderStyle}>Email</TableCell>
                <TableCell style={TableHeaderStyle}>Phone No</TableCell>
                <TableCell style={TableHeaderStyle}>Description</TableCell>
                <TableCell style={TableHeaderStyle}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>Cell 1</StyledTableCell>
                <TableCell>Cell 2</TableCell>
                <TableCell>Cell 3</TableCell>
                <TableCell>Cell 4</TableCell>
                <TableCell>Cell 5</TableCell>
              </TableRow>
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
