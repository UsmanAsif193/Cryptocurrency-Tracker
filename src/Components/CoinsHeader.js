import React from 'react'
import './CoinsHeader.css'

const CoinsHeader = () => {
    return (
        <div className="coins-header">
            <h2 className="name">Name</h2>
            <h2 className="symbol">Symbol</h2>
            <h2 className="price">Price</h2>
            <h2 className="volume">Volume</h2>
            <h2 className="percent">Percent</h2>
            <h2 className="marketcap">MarketCap</h2>
        </div>
    )
}

export default CoinsHeader
