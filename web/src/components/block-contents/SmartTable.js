// Basic Table is as per its name a very basic table.
// Do not use this table to implement user interactive elements such as filter and sorting
// It will not work as currently the key for each cell is generated in party by index of the cell in the array and
// not a true unique ID. Once we start to dynamically change the array. This will fail.

import React from 'react';
import { Table } from 'react-bootstrap';
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
    <Table responsive hover style={{ marginTop: '2rem' }}>
      {colHeading && (
        <thead>
          <tr key={thead._key}>
            {thead.cells.map((cell, index) => {
              if (cell._type === 'tableBlock') {
                return (
                  // eslint-disable-next-line
                  <th key={`${thead._key}-${index}`}>
                    <TableContent blocks={cell.copy} />
                  </th>
                );
              }
              if (cell._type === 'illustration') {
                return (
                  // eslint-disable-next-line
                  <th key={`${thead._key}-${index}`}>
                    <Illustration illustration={cell} />
                  </th>
                );
              }
              return <th>Uh oh something went wrong.</th>;
            })}
          </tr>
        </thead>
      )}
      <tbody>
        {tbody.map((row) => (
          <tr key={row._key}>
            {row.cells.map((cell, index) => {
              if (rowHeading && index === 0) {
                if (cell._type === 'tableBlock') {
                  return (
                    // eslint-disable-next-line
                    <th key={`${row._key}-${index}`}>
                      <TableContent blocks={cell.copy} />
                    </th>
                  );
                }
                if (cell._type === 'illustration') {
                  return (
                    // eslint-disable-next-line
                    <th key={`${row._key}-${index}`}>
                      <Illustration illustration={cell} />
                    </th>
                  );
                }
                return <th>oh oh something is wrong</th>;
              }
              if (cell._type === 'tableBlock') {
                return (
                  // eslint-disable-next-line
                  <td key={`${row._key}-${index}`}>
                    <TableContent blocks={cell.copy} />
                  </td>
                );
              }
              if (cell._type === 'illustration') {
                return (
                  // eslint-disable-next-line
                  <td key={`${row._key}-${index}`}>
                    <Illustration illustration={cell} />
                  </td>
                );
              }
              return <td>oh oh something is wrong</td>;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default SmartTable;
