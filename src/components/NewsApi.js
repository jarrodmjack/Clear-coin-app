import React, { useState, useEffect } from 'react';
import Header from "./Header"
const axios = require('axios')




const NewsApi = () => {


    const [news, setNews] = useState([]);


    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/search',
            params: { q: 'cryptocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
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
        <div className='news-box-container'>
            <div>
            <h1>News</h1>
            {news.map((article, index) => (
                <div key={index} className='news-box-style'>
                    <h3 className='news-title'>{article.name}</h3>
                    <p className='news-description'>{article.description}</p>
                </div>
            ))}
            </div>
        </div>



    )
}

export default NewsApi

