import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = ({coins}) => {

    const getData = (object) => {
      for (const property in object) {
        // console.log(`${property}: ${object[property]}`)
        return <CryptoItem coin={property} values={coins[property]} />;
      }
    };

    const allCoins = getData(coins) 

    // getData(coins)

    return (
        <>
        <ul>
            {allCoins}
        </ul>
        </>
    )
}

export default CryptoList;