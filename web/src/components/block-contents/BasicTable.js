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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  table: {
    tableLayout: 'fixed',
    minWidth: 700,
  },
  row: {
    verticalAlign: 'top',
  },
}));

function BasicTable({ basicTable }) {
  const classes = useStyles();
  const { colHeading, rowHeading, title, colgroup } = basicTable;
  console.log(colgroup);

  let thead = [];
  let tbody = basicTable.table.rows;

  if (colHeading) {
    thead = basicTable.table.rows[0]; // eslint-disable-line
    tbody = basicTable.table.rows.slice(1);
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label={title}>
        {colgroup && (
          <colgroup>
            {colgroup.map((col) =>
              col.width !== 0 ? <col style={{ width: `${col.width}%` }} /> : <col />,
            )}
          </colgroup>
        )}
        {colHeading && (
          <TableHead>
            <TableRow key={thead._key}>
              {thead.cells.map(
                (cell, index) =>
              rowHeading ? <TableCell key={`${thead._key}-${index}`} scope="row">{cell}</TableCell> : <TableCell key={`${thead._key}-${index}`}>{cell}</TableCell> // eslint-disable-line
              )}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {tbody.map((row) => (
            <TableRow key={row._key} className={classes.row}>
              {row.cells.map((cell, index) => {
                if (rowHeading && index === 0) {
                return <TableCell className="MuiTableCell-head" component="th" key={`${row.row_key}-${index}`} scope="row">{cell}</TableCell>; // eslint-disable-line
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
