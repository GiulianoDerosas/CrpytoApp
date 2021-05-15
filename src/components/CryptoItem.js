import React from "react";

const CryptoItem = ({image, name, symbol, price, volume, priceChange, marketcap}) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <>
        <div class="coin-row">
            <div class="coin">
                <img src={image}/>
                <h1>{name}</h1>
                <p class="coin-symbol">{symbol.toUpperCase()}</p>
            </div>
            <div class="coin-data">
                <p class="coin-price">Price: <br/>${price}</p>
                <p class="coin-volume">24Hr Vol: ${numberWithCommas(volume)}</p>
                {priceChange < 0 ? (
                    <p class="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : <p class="coin-percent green">{priceChange.toFixed(2)}%</p>}
                    <p class="coin-marketcap">Mkt Cap:<br/> ${numberWithCommas(marketcap)}</p>
            </div>
        </div>
        </>
    )
}

export default CryptoItem;