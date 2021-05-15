import React, {useState} from 'react'
import CryptoItem from './CryptoItem'

const Search = ({coins}) => {
    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )

    return (
        
        <div class="coin-list">
            <div class="coin-list">
                <h2 class="coin-text">Search for a Cryptocurrency</h2>
                <form>
                    <input type="text"
                    placeholder="Search"
                    class="coin-input"
                    onChange={handleChange}
                    />
                </form>
            </div>
            <br/>
            <br/>
            {filteredCoins.map(coin => {
                return(
                    <CryptoItem key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    volume={coin.total_volume}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    marketcap={coin.market_cap}
                    />
                )
            })}
        </div>
    )
}

export default Search;
