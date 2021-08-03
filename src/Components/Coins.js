import React from 'react'

function Coins({ image, name, symbol, price, volume, priceChange, marketcap }) {
    return (
        <div className="coin-tracker">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocalString()}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className="market-cap">
                        Mkt Cap : ${marketcap.toLocalString}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coins
