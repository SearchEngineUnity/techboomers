import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

function BasicTable({ basicTable }) {
  const { colHeading, rowHeading } = basicTable;

  let thead = [];
  let tbody = basicTable.table.rows;

  if (colHeading) {
    thead = basicTable.table.rows[0]; // eslint-disable-line
    tbody = basicTable.table.rows.slice(1);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        {colHeading && (
          <TableHead>
            <TableRow key={thead._key}>
              {thead.cells.map((cell, index) => (
              <TableCell key={`${thead._key}-${index}`}>{cell}</TableCell> // eslint-disable-line
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {tbody.map((row) => (
            <TableRow key={row._key}>
              {row.cells.map((cell, index) => {
                if (rowHeading && index === 0) {
                return <TableCell component="th" key={`${row.row_key}-${index}`}>{cell}</TableCell>; // eslint-disable-line
                }
              return <TableCell key={`${row._key}-${index}`}>{cell}</TableCell>; // eslint-disable-line
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
