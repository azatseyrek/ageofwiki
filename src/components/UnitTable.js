import React from 'react';
import {useSelector} from 'react-redux';
// table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Util
import {checkCost} from '../utils/utils'; // check the unit resource cost. (is it defined or is it equal to 0? filtering to UI)
// style
import {unitsStyle} from '../styles/mui/unittable.mui';
import {Link} from 'react-router-dom';

export default function UnitTable() {
  const classes = unitsStyle();

  const units = useSelector((state) =>
    state.filterOutput ? state.filterOutput : state.units,
  );

  return (
    <div className="unitTable">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableRow} align="left">
              Id
            </TableCell>
            <TableCell className={classes.tableRow} align="center">
              Name
            </TableCell>
            <TableCell className={classes.tableRow} align="left">
              Age
            </TableCell>
            <TableCell className={classes.tableRow} align="center">
              Costs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell className={classes.tableCell} align="left">
                {unit.id}
              </TableCell>
              <TableCell className={classes.tableCellName} align="center">
                <Link className="unitLink" to={`/details/${unit.id}`}>
                  {unit.name}
                </Link>
              </TableCell>
              <TableCell className={classes.tableCell} align="left">
                {unit.age}
              </TableCell>
              <TableCell className={classes.tableCellCost} align="center">
                {checkCost(unit)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
