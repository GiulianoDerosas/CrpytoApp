import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = ({coins}) => {

    const allCoins = coins.map((coin, index) => {
        return <CryptoItem coin={coin} key={index}/>
    })

    return (
        <>
        <ul>
            {allCoins}
        </ul>
        </>
    )
}

export default CryptoList;