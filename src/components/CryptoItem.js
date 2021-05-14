import React from "react";

const CryptoItem = ({coin, values}) => {
    
    const handleClick = () => {
        console.log("Hello");}

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <>
        <li onClick={handleClick}>
            <h4>{coin.toUpperCase()}</h4>
            <p>Price: {values.usd}</p>
            <p>24Hr Change: {values.usd_24h_change.toFixed(2)}%</p>
            <p>MarketCap:{numberWithCommas(values.usd_market_cap)}</p>
        </li>
        </>
    )
}

export default CryptoItem;