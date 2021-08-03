import React from 'react'

function Coins() {
    return (
        <div className="coin-tracker">
            <div className="coin-row">
                <div className="coin">
                    <img src="" alt="crypto" />
                    <h1>"cryptocurrency name"</h1>
                    <p className="coin-symbol">symbol</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">$10</p>
                    <p className="coin-volume">$volume</p>

                </div>
            </div>
        </div>
    )
}

export default Coins
