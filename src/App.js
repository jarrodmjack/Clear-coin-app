// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin'
import Header from './components/Header'
import TrendingBox from './components/TrendingBox';


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {

  // coin state
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // coin fetch api using axios. Fetching coin data
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data); //set the coins state
        console.log(res.data);
      })
      .catch(err => console.error(err))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  //function to filter coins and display what is typed in
const filteredCoins = coins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLowerCase())
  ) //filter through the coins state variable specified above
  // 




// Trending

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/search/trending')
      .then(res => {
          setTrending(res.data.coins);
      })
      .catch(err => console.error(err))
  }, []);


console.log(trending)




  return (
// start
<div className="coin-app">
    <Header />
    <TrendingBox trending={trending}/>

      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}></input>
        </form>
      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        )
      })}
    </div>

  );
}

export default App;
