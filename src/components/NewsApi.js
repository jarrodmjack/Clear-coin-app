import React, { useState, useEffect } from 'react';
import Header from "./Header"
const axios = require('axios')


const newsObj = [];

const NewsApi = ({ newsCoinsArr }) => {


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


    // const handleChange = e => {
    //     setNewsSearch(e.target.value)
    // }

    // //function to filter coins and display what is typed in
    // const filteredNewsCoins = newsCoins.filter(coin =>
    //     coin.name.toLowerCase().includes(newsSearch.toLowerCase())
    // ) //filter through the coins state variable specified above
    // // 



    // NEWS API
    const [news, setNews] = useState([]);
    // let newsObj = [] //holding santized data



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

            for (let i = 0; i < news.length; i++) {

                // validating info from fetch to avoid thumbnail error
                let obj = {
                    index: [i],
                    url: news[i].url,
                    image: news[i].image ? news[i].image.thumbnail.contentUrl : 'https://image.cnbcfm.com/api/v1/image/106928219-1629130755312-gettyimages-1234311531-sindeyev-notitle210729_np12K.jpeg?v=1649925814',
                    description: news[i].description,
                    title: news[i].name,
                    providerImage: news[i].provider[0].image ? news[i].provider[0].image.thumbnail.contentUrl : 'https://image.cnbcfm.com/api/v1/image/106928219-1629130755312-gettyimages-1234311531-sindeyev-notitle210729_np12K.jpeg?v=1649925814',
                    providerName: news[i].provider[0].name,
                    time: news[i].datePublished
                }
                // obj.defaultImage = '*image source*'
                // obj.defaultProviderImage = '*image source*'

                newsObj.push(obj)
            }

            // for(let i = 0; i < news.length; i++){
            //     newsObj.push(news[i])
            // }

            // console.log(newsObj)

        }).catch(function (error) {
            console.error(error);
        });
    }, [])



    const fetchNewsApi = (currency) => {
        const options = {
            method: 'GET',
            url: `https://bing-news-search1.p.rapidapi.com/news/search`,
            params: { q: `${currency} cryptocurrency`, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': 'db3e8ae18bmshd7bb610557d438fp1e9721jsneadf0cccb21c',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setNews(response.data.value)

        }).catch(function (error) {
            console.error(error);
        });
    }

    const handleChange = e => {
        fetchNewsApi(e.target.innerText)

    }


    console.log(newsObj)



    return (
        <div>
            <h1 className='current-news-title'>Current News</h1>

            {/* this is a dropdown menu on the news page that contains all of the top 100 coin names to be searched */}
            <div className="dropdown">
                <div>
                    <button className="dropbtn">Search news by currency</button>
                    {/* <h3>Selected:</h3> */}
                </div>
                <div className="dropdown-content">
                    {/* dynamically generate these */}
                    {newsCoinsArr.map((item, index) => (
                        <a key={index} className='dropdown-link' onClick={handleChange}>{item}</a>
                    ))}

                </div>
            </div>

            {/* //using sanitized array of objects  */}
            <div className='news-box-container'>
                {news.map((article, index) => (
                    <div key={index} className='news-box-style'>
                        <div className='news-title-thumb-container'>
                            <h3 className='news-title'><a href={article.url}>{article.name}</a></h3> <img className='news-thumb' src={article.image ? article.image.thumbnail.contentUrl : 'https://image.cnbcfm.com/api/v1/image/106928219-1629130755312-gettyimages-1234311531-sindeyev-notitle210729_np12K.jpeg?v=1649925814'} alt={'news'}></img>
                        </div>
                        <p className='news-description'>{article.description.length > 250 ? article.description.slice(0, 250) : article.description}...</p>
                        <div className='provider-date-container'>
                            <div className='provider-container'>
                                <img className='news-provider-logo' src={article.provider[0].image ? article.provider[0].image.thumbnail.contentUrl : 'https://cdn.vox-cdn.com/thumbor/Xdl0ogE5uEF7FmiB2BFII6LrLpQ=/0x0:660x440/1200x800/filters:focal(278x168:382x272)/cdn.vox-cdn.com/uploads/chorus_image/image/67583196/binglogo.0.jpg'} alt={'providername'}></img>
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

