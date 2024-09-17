import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const createData = (name, progress, quantity, date) => ({ name, progress, quantity, date });

const rows = [
  createData('Horizon UI PRO', '70%', 2448, '24.Jan.2021'),
  createData('Horizon UI Free', '30%', 1234, '13.Jan.2021'),
  createData('Venus AI PRO', '45%', 3312, '06.Jan.2021'),
];

const Tables = () => {
  return (
    <div className="p-6">
      <TableContainer component={Paper} className="shadow-md">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.progress}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tables;
