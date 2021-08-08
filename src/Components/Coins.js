import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './Coins.css'
import GradientButton from './Gradient-Button';

export default function Coins({ Coins }) {

  const [CoinsData, setCoinsData] = useState([])
  const [loadMore, setloadMore] = useState(10)
  const [buttondisable, setbuttondisable] = useState(false)

  useEffect(() => {
    setCoinsData(Coins)
  })

  const loadMoreProjects = () => {
    setloadMore(loadMore => loadMore + 10)
    setbuttondisable(true)
  }

  return (
    <>
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
          {CoinsData.slice(0, loadMore).map((coin) => (
            <>
              <div className="coin-line"></div>
              <Tr className="coin-table-row" key={coin.name} style={{ border: 'none' }}>
                <Td className="coin-name-section">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    height="30px"
                    width="30px"
                  />
                  {coin.name}
                </Td>
                <Td>{coin.symbol.toUpperCase()}</Td>
                <Td>${coin.current_price}</Td>
                <Td>${coin.market_cap.toLocaleString()}</Td>
                {coin.market_cap_change_percentage_24h < 0 ?
                  (<Td className="red">{coin.market_cap_change_percentage_24h.toFixed(2)}%</Td>)
                  :
                  (
                    <Td className="green">{coin.market_cap_change_percentage_24h.toFixed(2)}%</Td>
                  )
                }
                <Td>{coin.total_volume.toLocaleString()}</Td>
                <hr />
              </Tr>
            </>
          ))}
        </Tbody>
      </Table>
      <br />
      <GradientButton
        buttonvalue={"Load More"}
        handleClick={loadMoreProjects}
        buttondisable={buttondisable}
      />
    </>
  );
}
