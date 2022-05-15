import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {unitsStyle} from '../styles/mui/unittable.mui';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {date: '2020-01-05', customerId: '11091700', amount: 3},
      {date: '2020-01-02', customerId: 'Anonymous', amount: 1},
    ],
  };
}

function Row(props) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);
  const classes = unitsStyle();

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className={classes.tableCellName} component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell className={classes.tableCell} align="left">
          {row.calories}
        </TableCell>
        <TableCell className={classes.tableCell} align="center">
          {row.fat}
        </TableCell>
        <TableCell className={classes.tableCellCost} align="right">
          {row.carbs}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableCellHeader}>
                      Date
                    </TableCell>
                    <TableCell className={classes.tableCellHeader}>
                      Customer
                    </TableCell>
                    <TableCell
                      className={classes.tableCellHeader}
                      align="right"
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      className={classes.tableCellHeader}
                      align="right"
                    >
                      Total price
                    </TableCell>
                    <TableCell
                      className={classes.tableCellHeader}
                      align="right"
                    >
                      Total price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell
                        className={classes.tableCellBody}
                        component="th"
                        scope="row"
                      >
                        date
                      </TableCell>
                      <TableCell className={classes.tableCellBody}>
                        23
                      </TableCell>
                      <TableCell
                        className={classes.tableCellBody}
                        align="right"
                      >
                        123123
                      </TableCell>
                      <TableCell
                        className={classes.tableCellBody}
                        align="right"
                      >
                        123123
                      </TableCell>
                      <TableCell
                        className={classes.tableCellBody}
                        align="right"
                      >
                        123
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 23),
  createData('Ice cream sandwich', 237, 9.0, 23),
  createData('Eclair', 262, 16.0, 23),
  createData('Cupcake', 305, 3.7, 23),
  createData('Gingerbread', 356, 16.0, 23),
];

export default function CollapsibleTable() {
  const classes = unitsStyle();

  return (
    <div className="unitTable">
      <Table className={classes.table} aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableRow} align="left"></TableCell>
            <TableCell className={classes.tableRow} align="left">
              Name
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Id
            </TableCell>
            <TableCell className={classes.tableRow} align="center">
              Age
            </TableCell>
            <TableCell className={classes.tableRow} align="right">
              Costs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
