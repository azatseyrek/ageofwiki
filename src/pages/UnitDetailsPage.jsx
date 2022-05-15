import React from 'react';
import {useSelector} from 'react-redux';
import uuid from 'react-uuid';
// table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Util
import {checkCost} from '../utils/utils';
// style
import {unitsStyle} from '../styles/mui/unittable.mui';
import {Link, useParams} from 'react-router-dom';

export default function UnitDetailPage() {
  const classes = unitsStyle();

  const {unitId} = useParams();

  const units = useSelector((state) => state.units);
  const filteredUnit = units.filter((unit) => unit.id === parseInt(unitId))[0];

  let unitKey = [];
  let unitValue = [];
  for (var key in filteredUnit) {
    if (key !== 'cost' && key !== 'description') {
      unitKey.push(key);
      unitValue.push(filteredUnit[key]);
    }
  }

  console.log(unitValue);
  return (
    <div className="unitDetailContainer">
      <div className="unitTable">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableRow} align="left">
                Detail
              </TableCell>

              <TableCell className={classes.tableRow} align="center">
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {unitKey.map((key) => (
              <TableRow key={uuid()}>
                <TableCell className={classes.tableCell} align="left">
                  {key}
                </TableCell>
                <TableCell className={classes.tableCellCost} align="center">
                  {filteredUnit[key].toString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
