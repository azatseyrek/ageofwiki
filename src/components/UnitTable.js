import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {hover} from '@testing-library/user-event/dist/hover';

const useStyles = makeStyles({
  table: {
    backgroundColor: '#2d3134',
    fontFamily: 'MedievalSharp, sans',
  },
  tableRow: {
    fontFamily: 'MedievalSharp',
    color: '#914343',
    fontSize: 20,
  },
  tableCell: {
    fontFamily: 'MedievalSharp',
    color: '#9a9491',
    fontSize: 18,
  },
  tableCellName: {
    fontFamily: 'MedievalSharp',
    color: '#3c80ad',
    fontSize: 18,
    textDecoration: 'underline',
  },

  tableCellCost: {
    fontFamily: 'MedievalSharp',
    color: 'green',
    fontSize: 20,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div className="unitTable">
      <TableContainer component={Paper}>
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
      </TableContainer>
    </div>
  );
}
