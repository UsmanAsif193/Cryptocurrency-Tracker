import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./App.css";
import Coins from "./Components/Coins";
import Convertor from "./Components/Convertor";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [ApiCall, setApiCall] = useState();

  useEffect(() => {
    let api = axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setApiCall(api);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(coins);
  return (
    <div className="coin-app">
      <div className="convertor-search">
        <div className="coin-search">
          <h1 className="coin-text">Search a Currency</h1>
          <form>
            <input
              type="text"
              className="coin-input"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>
        </div>
        {ApiCall && <Convertor coins={coins} />}
      </div>
      {ApiCall ? (
        <>
          <Coins Coins={filteredCoins} search={search} />
        </>
      ) : (
        <div className="loader">
          <div className="loader-text">Loading</div>
          <Loader
            className="loader-dots"
            type="ThreeDots"
            color="#7918f2"
            height={50}
            width={50}
          />
        </div>
      )}
    </div>
  );
}

export default App;
