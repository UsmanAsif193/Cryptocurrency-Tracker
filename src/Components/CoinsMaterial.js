import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './CoinsMaterial.css'

export default function CoinsMaterial({ Coins }) {

  return (
    <Table>
      <Thead>
        <Tr>
          <Th style={{ fontWeight: 700, textAlign: 'left' }}>Name</Th>
          <Th style={{ fontWeight: 700, textAlign: 'left' }}>Symbol</Th>
          <Th style={{ fontWeight: 700, textAlign: 'left' }}>Price</Th>
          <Th style={{ fontWeight: 700, textAlign: 'left' }}>Volume</Th>
          <Th style={{ fontWeight: 700, textAlign: 'left' }}>Percentage</Th>
          <Th style={{ fontWeight: 700, textAlign: 'left' }}>Market Cap</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Coins.map((coin) => (
          <Tr className="coin-table-row" key={coin.name}>
            <Td className="coin-name"><img src={coin.image} alt={coin.name} height="15px" width="15px" />{coin.name}</Td>
            <Td>{coin.symbol.toUpperCase()}</Td>
            <Td>${coin.current_price}</Td>
            <Td>${coin.market_cap.toLocaleString()}</Td>
            <Td>{coin.market_cap_change_percentage_24h}%</Td>
            <Td>{coin.total_volume.toLocaleString()}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
