// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Coin from './Coin'
import Header from './components/Header'
import TrendingBox from './components/TrendingBox';
import TrustedExchangeBox from './components/TrustedExchangeBox';
import GlobalCurrencyData from './components/GlobalCurrencyData';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';


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

  // const [news, setNews] = useState([])

  // const options = {
  //   method: 'GET',
  //   url: 'https://last-crypto-news.p.rapidapi.com/cryptonews',
  //   headers: {
  //     'X-RapidAPI-Key': 'db3e8ae18bmshd7bb610557d438fp1e9721jsneadf0cccb21c',
  //     'X-RapidAPI-Host': 'last-crypto-news.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   // axios.get('https://crypto-news-live3.p.rapidapi.com/news')
  //   axios.request(options).then(function (response) {
  //     // console.log();
  //     setNews(response.data.slice(0, 3))
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, []);

  // console.log(news)







  const [globalCurrencyData, setGlobalCurrencyData] = useState([]);
  const [globalMcapPercentage, setGlobalMcapPercentage] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        console.log(res.data)

        setGlobalCurrencyData(res.data.data.total_market_cap.cad.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }));

        setGlobalMcapPercentage(res.data.data.market_cap_change_percentage_24h_usd.toFixed(2))

        // console.log(res)
      })
      .catch(err => console.error(err))
  }, []);


  console.log(globalCurrencyData)
  console.log(globalMcapPercentage)
  // console.log(globalCurrencyData.total_market_cap.cad) 



  // Create global component -> done
  // create return element in the return section. probably Div/h3/p with 2 spans
  // spans will include global market cap and percentage increase
  // insert component below news component






  return (
    <Router>
      <div className="coin-app">

        <Header />
        <Routes>
          <Route path='/' element ={ // HOME PAGE ROUTE
            <>
            <GlobalCurrencyData globalMcapPercentage={globalMcapPercentage} globalCurrencyData={globalCurrencyData} />
          <div className='triple-box-container'>
            <div className='triple-box-styling'>
              <h2 className='triple-box-title'>Trending</h2>
              <TrendingBox trending={trending} />
            </div>
            <div className='triple-box-styling'>
              <h2 className='triple-box-title'>Top Exchanges</h2>
              <TrustedExchangeBox trustedExchanges={trustedExchanges} />
            </div>
            <div className='triple-box-styling'>
              <h2 className='triple-box-title'>Current News</h2>

            </div>
          </div>
          <div className='coin-search'>
            <h1 className='coin-text'>Search a currency</h1>
            <form>
              <input type='text' placeholder="Search a currency" className='coin-input' onChange={handleChange}></input>
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
            </>
          }
          />

          <Route path='/about' element={<AboutUs />} />
          <Route path ='/portfolio' element={<Portfolio chartData={coins} />} />

        </Routes>

      </div>



    </Router>
  );
}

export default App;
