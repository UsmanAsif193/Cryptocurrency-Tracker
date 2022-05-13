import React, { useReducer, useEffect } from "react";
let FirstnitialValue;
let SecondInitialValue;
const ACTIONS = {
  LOAD: "load",
  CHANGE: "change",
  VALUE: "value",
};

function filter(coins, id) {
  return coins.find((x) => x.id === id);
}

function evaluate(price, firstItem, secondItem) {
  const firstItemPrice = parseFloat(firstItem.current_price);
  const secondItemPrice = parseFloat(secondItem.current_price);

  return (parseFloat(price) * firstItemPrice) / secondItemPrice;
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.LOAD:
      return {
        ...state,
        first: payload.coins[0],
        second: payload.coins[1],
      };
    case ACTIONS.CHANGE:
      if (payload.second && payload.first) return state;

      if (payload.second) {
        return {
          ...state,
          second: payload.second,
          firstInput: state.firstInput,
          secondInput: evaluate(state.firstInput, state.first, payload.second),
        };
      }
      return {
        ...state,
        first: payload.first,
        firstInput: state.firstInput,
        secondInput: evaluate(state.firstInput, payload.first, state.second),
      };

    case ACTIONS.VALUE:
      return {
        ...state,
        firstInput: payload.firstInput,
        secondInput: evaluate(payload.firstInput, state.first, state.second),
      };
  }
}

const Convertor = ({ coins }) => {
  let initialValue = {
    first: FirstnitialValue,
    second: SecondInitialValue,
  };
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state);
  useEffect(() => {
    dispatch({ type: ACTIONS.LOAD, payload: { coins: coins } });
  }, [coins]);

  return (
    <div>
      <div>
        <select
          name={1}
          id="1"
          onChange={(e) =>
            dispatch({
              type: ACTIONS.CHANGE,
              payload: { first: filter(coins, e.target.value) },
            })
          }
        >
          {coins
            .filter((x) => x.id !== state.second.id)
            .map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        <input
          type="number"
          onChange={(e) =>
            dispatch({
              type: ACTIONS.VALUE,
              payload: { firstInput: e.target.value },
            })
          }
          value={state.firstInput}
        />
      </div>

      <div className="convertor-input-2">
        <select
          name={2}
          id="2"
          onChange={(e) =>
            dispatch({
              type: ACTIONS.CHANGE,
              payload: { second: filter(coins, e.target.value) },
            })
          }
        >
          {coins
            .filter((x) => x.id !== state.first.id)
            .map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        <input
          type="number"
          value={state.secondInput}
          onChange={(e) =>
            dispatch({
              type: ACTIONS.VALUE,
              payload: { secondInput: e.target.value },
            })
          }
          disabled
        />
      </div>
    </div>
  );
};

export default Convertor;

FirstnitialValue = {
  ath: 69045,
  ath_change_percentage: -37.13292,
  ath_date: "2021-11-10T14:24:11.849Z",
  atl: 67.81,
  atl_change_percentage: 63912.78538,
  atl_date: "2013-07-06T00:00:00.000Z",
  circulating_supply: 19005200,
  current_price: 43432,
  fully_diluted_valuation: 911858349625,
  high_24h: 45193,
  id: "bitcoin",
  image:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  last_updated: "2022-04-07T10:50:39.129Z",
  low_24h: 42867,
  market_cap: 825240490776,
  market_cap_change_24h: -33881925685.926514,
  market_cap_change_percentage_24h: -3.94378,
  market_cap_rank: 1,
  max_supply: 21000000,
  name: "Bitcoin",
  price_change_24h: -1760.938207568448,
  price_change_percentage_24h: -3.89648,
  roi: null,
  symbol: "btc",
  total_supply: 21000000,
  total_volume: 29887746480,
};
SecondInitialValue = {
  ath: 4878.26,
  ath_change_percentage: -33.86394,
  ath_date: "2021-11-10T14:24:19.604Z",
  atl: 0.432979,
  atl_change_percentage: 745037.79367,
  atl_date: "2015-10-20T00:00:00.000Z",
  circulating_supply: 120279552.249,
  current_price: 3222.86,
  fully_diluted_valuation: null,
  high_24h: 3324.93,
  id: "ethereum",
  image:
    "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  last_updated: "2022-04-07T11:16:39.708Z",
  low_24h: 3149.93,
  market_cap: 387433865482,
  market_cap_change_24h: -12676670537.308716,
  market_cap_change_percentage_24h: -3.16829,
  market_cap_rank: 2,
  max_supply: null,
  name: "Ethereum",
  price_change_24h: -78.395579029022,
  price_change_percentage_24h: -2.37472,
  roi: {
    times: 98.06754442363105,
    currency: "btc",
    percentage: 9806.754442363106,
  },
  symbol: "eth",
  total_supply: null,
  total_volume: 21064363105,
};
