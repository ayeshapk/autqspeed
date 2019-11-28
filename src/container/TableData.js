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
              <TableCell align="right">ENGINE_POWER&nbsp;(kW)</TableCell>
              <TableCell align="right">RATED_PAYLOAD&nbsp;(kg)</TableCell>
              <TableCell align="right">HEAPED_CAPACITY&nbsp;(m³)</TableCell>
              <TableCell align="right">GUARANTEE&nbsp;(years)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.MODEL}>
                <TableCell style={{paddingLeft:'10px'}} component="th" scope="row">
                  {row.MODEL}
                </TableCell>
                <TableCell align="right">{row.ENGINE_POWER}</TableCell>
                <TableCell align="right">{row.RATED_PAYLOAD}</TableCell>
                <TableCell align="right">{row.HEAPED_CAPACITY}</TableCell>
                <TableCell align="right">{row.GUARANTEE}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
