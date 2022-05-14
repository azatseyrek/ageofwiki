import {makeStyles} from '@material-ui/core';

export const unitsStyle = makeStyles({
  table: {
    backgroundColor: '#2d313497',
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
