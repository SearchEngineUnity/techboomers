// Basic Table is as per its name a very basic table.
// Do not use this table to implement user interactive elements such as filter and sorting
// It will not work as currently the key for each cell is generated in party by index of the cell in the array and
// not a true unique ID. Once we start to dynamically change the array. This will fail.

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
import TableContent from './TableSerializer';
import Illustration from './Illustration';

function SmartTable({ smartTable }) {
  const { colHeading, rowHeading } = smartTable;

  let thead = [];
  let tbody = smartTable.table.rows;

  if (colHeading) {
    thead = smartTable.table.rows[0]; // eslint-disable-line
    tbody = smartTable.table.rows.slice(1);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        {colHeading && (
          <TableHead>
            <TableRow key={thead._key}>
              {thead.cells.map((cell, index) => {
                if (cell._type === 'tableBlock') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`}>
                      <TableContent blocks={cell.copy} />
                    </TableCell>
                  );
                }
                if (cell._type === 'illustration') {
                  return (
                    // eslint-disable-next-line
                  <TableCell key={`${thead._key}-${index}`}>
                      <Illustration illustration={cell} />
                    </TableCell>
                  );
                }
                return <TableCell>Uh oh something went wrong.</TableCell>;
              })}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {tbody.map((row) => (
            <TableRow key={row._key}>
              {row.cells.map((cell, index) => {
                if (rowHeading && index === 0) {
                  if (cell._type === 'tableBlock') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`}>
                        <TableContent blocks={cell.copy} />
                      </TableCell>
                    );
                  }
                  if (cell._type === 'illustration') {
                    return (
                      // eslint-disable-next-line
                      <TableCell component="th" key={`${row._key}-${index}`}>
                        <Illustration illustration={cell} />
                      </TableCell>
                    );
                  }
                  return <TableCell component="th">oh oh something is wrong</TableCell>;
                }
                if (cell._type === 'tableBlock') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`}>
                      <TableContent blocks={cell.copy} />
                    </TableCell>
                  );
                }
                if (cell._type === 'illustration') {
                  return (
                    // eslint-disable-next-line
                    <TableCell key={`${row._key}-${index}`}>
                      <Illustration illustration={cell} />
                    </TableCell>
                  );
                }
                return <TableCell>oh oh something is wrong</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SmartTable;
