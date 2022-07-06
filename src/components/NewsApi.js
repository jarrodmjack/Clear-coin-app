import React, { useState, useEffect } from 'react';
import Header from "./Header"
const axios = require('axios')




const NewsApi = () => {


     // getting coin list to filter/search news

     const [newsCoins, setNewsCoins] = useState([]);
     const [newsSearch, setNewsSearch] = useState('');

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
          .then(res => {
            setNewsCoins(res.data); //set the coins state
            console.log(res.data);
          })
          .catch(err => console.error(err))
      }, []);

      
    const handleChange = e => {
        setNewsSearch(e.target.value)
      }
    
      //function to filter coins and display what is typed in
      const filteredNewsCoins = newsCoins.filter(coin =>
        coin.name.toLowerCase().includes(newsSearch.toLowerCase())
      ) //filter through the coins state variable specified above
      // 




    // NEWS API
    const [news, setNews] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://bing-news-search1.p.rapidapi.com/news/search`,
            params: { q: `cryptocurrency`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': 'db3e8ae18bmshd7bb610557d438fp1e9721jsneadf0cccb21c',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data.value);
            setNews(response.data.value)

        }).catch(function (error) {
            console.error(error);
        });
    }, [])




    return (
        <div>
            <h1 className='current-news-title'>Current News</h1>
            <form>
              <input type='text' placeholder="Search News" onChange={handleChange} className='coin-input'></input>
            </form>
            <div className='news-box-container'>
                {news.map((article, index) => (
                    <div key={index} className='news-box-style'>
                        <div className='news-title-thumb-container'>
                            <h3 className='news-title'><a href={article.url}>{article.name}</a></h3> <img className='news-thumb' src={article.image.thumbnail.contentUrl}></img>
                        </div>
                        <p className='news-description'>{article.description}</p>
                        <div className='provider-date-container'>
                            <div className='provider-container'>
                                <img className='news-provider-logo' src={article.provider[0].image.thumbnail.contentUrl}></img>
                                <span>{article.provider[0].name}</span>
                            </div>
                           
                            <span className='news-date'>{article.datePublished.slice(0, 10)} {article.datePublished.slice(12, 19)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default NewsApi

