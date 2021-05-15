import React, {useEffect, useState} from "react";
import CryptoItem from "../components/CryptoList";
import Search from "../components/Search";

const CryptoContainer = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        getCryptoData()
    }, [])

    const getCryptoData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then(response => response.json())
        .then(coins => setCoins(coins))
    }

    return (
        <>
        <CryptoItem coins = {coins}/>
        <br></br>
        <Search coins = {coins}/>
        </>
    )
}

export default CryptoContainer;