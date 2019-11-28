import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from "react"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),

  },
  table: {
    minWidth: 700,
  },
}));


export default function TableData({rows}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{paddingLeft:'10px'}}>Model</TableCell>
              <TableCell align="right">Engine</TableCell>
              <TableCell align="right">HP</TableCell>
              <TableCell align="right">Cooling</TableCell>
              <TableCell align="right">Fuel Type</TableCell>
              <TableCell align="right">Cylinders #</TableCell>
              <TableCell align="right">Engine Disp.</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map(row => (
              <TableRow key={row.MODEL}>
                <TableCell style={{paddingLeft:'10px'}} component="th" scope="row">
                  {row.MODEL}
                </TableCell>
                <TableCell align="right">{row.ENGINE}</TableCell>
                <TableCell align="right">{row.HP}</TableCell>
                <TableCell align="right">{row.Cooling}</TableCell>
                <TableCell align="right">{row.Fuel_Type}</TableCell>
                <TableCell align="right">{row.Cylinders}</TableCell>
                <TableCell align="right">{row.Engine_Disp}</TableCell>
                <TableCell align="right">{row.Weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
