import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coins from './Components/Coins';

function App() {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">
          Search a Currency
        </h1>
        <form>
          <input type="text" className="coin-input" placeholder="Search" />
        </form>
      </div>
      <Coins coins={coins} />
    </div>
  );
}

export default App;
