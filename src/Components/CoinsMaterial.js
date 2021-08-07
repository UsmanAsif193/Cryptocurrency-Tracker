import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'white',
    color: 'black',
    textTransfrom: 'bold',
    border: 0,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'white',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CoinsMaterial({ Coins }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ fontWeight: 700 }}>Name</StyledTableCell>
            <StyledTableCell style={{ fontWeight: 700 }} align="right">Symbol</StyledTableCell>
            <StyledTableCell style={{ fontWeight: 700 }} align="right">Price</StyledTableCell>
            <StyledTableCell style={{ fontWeight: 700 }} align="right">Volume</StyledTableCell>
            <StyledTableCell style={{ fontWeight: 700 }} align="right">Percentage</StyledTableCell>
            <StyledTableCell style={{ fontWeight: 700 }} align="right">Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Coins.map((coin) => (
            <StyledTableRow key={coin.name}>
              <StyledTableCell component="th" scope="row">
                <img src={coin.image} alt="" height='30px' width='30px' />
                {coin.name}
              </StyledTableCell>
              <StyledTableCell align="right">{coin.symbol.toUpperCase()}</StyledTableCell>
              <StyledTableCell align="right">${coin.current_price}</StyledTableCell>
              <StyledTableCell align="right">${coin.market_cap.toLocaleString()}</StyledTableCell>
              <StyledTableCell align="right">{coin.market_cap_change_percentage_24h}%</StyledTableCell>
              <StyledTableCell align="right">{coin.total_volume.toLocaleString()}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
