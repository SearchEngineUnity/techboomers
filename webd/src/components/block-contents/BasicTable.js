import React from 'react';
import { Table } from 'react-bootstrap';

function BasicTable({ basicTable }) {
  const { colHeading, rowHeading } = basicTable;

  let thead = [];
  let tbody = basicTable.table.rows;

  if (colHeading) {
    thead = basicTable.table.rows[0]; // eslint-disable-line
    tbody = basicTable.table.rows.slice(1);
  }

  return (
    <Table responsive hover style={{ marginTop: '2rem' }}>
      {colHeading && (
        <thead>
          <tr key={thead._key}>
            {thead.cells.map((cell, index) => (
              <th key={`${thead._key}-${index}`}>{cell}</th> // eslint-disable-line
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {tbody.map((row) => (
          <tr key={row._key}>
            {row.cells.map((cell, index) => {
              if (rowHeading && index === 0) {
                return <th key={`${row.row_key}-${index}`}>{cell}</th>; // eslint-disable-line
              }
              return <td key={`${row._key}-${index}`}>{cell}</td>; // eslint-disable-line
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BasicTable;
