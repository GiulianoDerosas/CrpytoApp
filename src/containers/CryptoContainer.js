import React, {useEffect, useState} from "react";
import CryptoList from "../components/CryptoList";

const CryptoContainer = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        getCryptoData()
    }, [])

    const getCryptoData = () => {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true")
        .then(response => response.json())
        .then(coins => setCoins(coins))
    }
    console.log(coins);

    return (
        <>
            <CryptoList coins = {coins}/>
        </>
    )
}

export default CryptoContainer;