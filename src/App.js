// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin'


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
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
  )

  return (
  
    

// start
<div className="coin-app">


{/* header */}
      <header className="header-style">
        <h1 className="title-text">ClearCoin.io</h1>
        <div className='header-btn-container'>
          <a className='btn' href='#'>Portfolio</a>
          <a className='btn' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Sign In</a>
        </div>
      </header>


{/* triple section */}




{/* Main content */}
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input type='text' placeholder='Search' className='coin-input' onChange={handleChange}></input>
        </form>
      </div>

      <div className='crypto-chart-container'>
        <span className='crypto-chart-heading'>Name</span>
        <span className='crypto-chart-heading'>Symbol</span>
        <span className='crypto-chart-heading'>CAD</span>
        <span className='crypto-chart-heading'>24hr Vol</span>
        <span className='crypto-chart-heading'>24hr %</span>
        <span className='crypto-chart-heading'>Market Cap</span>
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
