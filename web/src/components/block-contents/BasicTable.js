/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    tableLayout: 'fixed',
    minWidth: 700,
  },
  row: {
    verticalAlign: 'top',
  },
});

function BasicTable({ basicTable }) {
  const classes = useStyles();
  const { colHeading, rowHeading, title, colgroup } = basicTable;

  let thead = [];
  let tbody = basicTable.table.rows;

  if (colHeading) {
    thead = basicTable.table.rows[0]; // eslint-disable-line
    tbody = basicTable.table.rows.slice(1);
  }

  return (
    <Box mx="40px" my={2}>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label={title}>
          {colgroup && (
            <colgroup>
              {colgroup.map((col, index) =>
                col.width !== '0' ? (
                  <col span="1" style={{ width: col.width }} key={`colWidth-${index}`} />
                ) : (
                  <col key={`colWidth-${index}`} span="1" style={{ width: 'auto' }} />
                ),
              )}
            </colgroup>
          )}
          {colHeading && (
            <TableHead>
              <TableRow key={thead._key}>
                {thead.cells.map((cell, index) =>
                  rowHeading ? (
                    <TableCell
                      key={`${thead._key}-${index}`}
                      scope="row"
                      style={{ overflow: 'hidden' }}
                    >
                      {cell}
                    </TableCell>
                  ) : (
                    <TableCell key={`${thead._key}-${index}`} style={{ overflow: 'hidden' }}>
                      {cell}
                    </TableCell>
                  ),
                )}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {tbody.map((row) => (
              <TableRow key={row._key} className={classes.row}>
                {row.cells.map((cell, index) => {
                  if (rowHeading && index === 0) {
                    return (
                      <TableCell
                        className="MuiTableCell-head"
                        component="th"
                        key={`${row._key}-${index}`}
                        scope="row"
                        style={{ overflow: 'hidden' }}
                      >
                        {cell}
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell key={`${row._key}-${index}`} style={{ overflow: 'hidden' }}>
                      {cell}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BasicTable;
