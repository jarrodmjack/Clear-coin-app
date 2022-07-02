// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin'
import Header from './components/Header'
import News from './components/News'
import TrendingBox from './components/TrendingBox';
import TrustedExchangeBox from './components/TrustedExchangeBox';


// https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {


  // FETCH COINS **************
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


  // Fetch Trending ************

  const [trending, setTrending] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/search/trending')
      .then(res => {
        setTrending(res.data.coins.slice(0, 3));
      })
      .catch(err => console.error(err))
  }, []);



  //Fetch Trusted Exchanges ***************
  const [trustedExchanges, setTrustedExchanges] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/exchanges?per_page=3')
      .then(res => {
        setTrustedExchanges(res.data);
      })
      .catch(err => console.error(err))
  }, []);

  console.log(trustedExchanges)
  console.log(trending)




  // FETCH CRYPTO NEWS *********

  const [news, setNews] = useState([])

  const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': 'db3e8ae18bmshd7bb610557d438fp1e9721jsneadf0cccb21c',
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
    }
  };

  useEffect(() => {
    // axios.get('https://crypto-news-live3.p.rapidapi.com/news')
    axios.request(options).then(function (response) {
      const data = response.data.slice(0, 5);
      setNews(data)
    }).catch(function (error) {
      console.error(error);
    });
  }, []);







  const [globalCurrencyData, setGlobalCurrencyData] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        
        setGlobalCurrencyData(res.data);
        // console.log(res)
      })
      .catch(err => console.error(err))
  }, []);

  console.log(globalCurrencyData) 


  



  return (
    // start
    <div className="coin-app">
      <Header />
      <News />
      <div className='triple-box-container'>
        <div className='triple-box-styling'>
          <h2 className='triple-box-title'>Trending</h2>
          <TrendingBox trending={trending} />
        </div>
        <div className='triple-box-styling'>
        <h2 className='triple-box-title'>Top Exchanges</h2>
          <TrustedExchangeBox trustedExchanges={trustedExchanges} />
        </div>
      </div>
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
