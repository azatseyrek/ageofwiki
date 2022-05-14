import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {unitsStyle} from '../styles/mui/unittable.mui';

export default function BasicTable() {
  const classes = unitsStyle();

  return (
    <div className="unitTable">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableRow} align="left">
              Id
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Name
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Age
            </TableCell>
            <TableCell className={classes.tableRow} align="right">
              Costs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCell} align="left">
              deneme
            </TableCell>
            <TableCell className={classes.tableCellName} align="left">
              name
            </TableCell>
            <TableCell className={classes.tableCell} align="left">
              test
            </TableCell>
            <TableCell className={classes.tableCellCost} align="right">
              cost
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
