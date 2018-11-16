import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.red,
    color: theme.palette.common.blue,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.blue,
    },
  },
});

let id = 0;
function createData(name, calories) {
  id += 1;
  return { id, name, calories };
}



function ResultsTable(props) {
  const { classes, counting, addition, subtraction, multiplication } = props;

  let rows = [
    createData('Counting', counting),
    createData('Addition', addition),
    createData('Subtraction', subtraction),
    createData('Multiplication', multiplication), 
  ];

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Question Type</CustomTableCell>
            <CustomTableCell numeric>Number of Questions</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell numeric>{row.calories}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

ResultsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  counting: PropTypes.number.isRequired,
  addition: PropTypes.number.isRequired,
  subtraction: PropTypes.number.isRequired,
  multiplication: PropTypes.number.isRequired,
};

export default withStyles(styles)(ResultsTable);