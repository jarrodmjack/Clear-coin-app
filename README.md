<hr>

<img src='https://phantom-marca.unidadeditorial.es/d6811174d250534bc39d0fd0920eec14/crop/0x0/887x499/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/10/16469298673188.png'></img>

<hr>


<b><h1>Clearcoin Cypto</h1></b>




This is a full-stack crypto price-tracking application.





Link to project: TBD...




Tech used: ReactJS, Node.js, MongoDB, JSX, API's from multiple different sources, including Coingecko and RapidAPI.

To begin this project, I started by using axios (Node module) to fetch my main cryptocurrency price tracker API from Coingecko. Coingecko is one of the largest Crypto price tracking applications in the world, with dozens of available API's (PS. Thanks coingecko!!!). I then created my main coin component and rendered all of the data I was receiving from coingecko, I used JSX to dynamically display this information and used my own lightweight CSS to style everything. Once the main section was done, I moved to the trending sections above, in which another call is made to a separate API from coingecko listing the trending currencies and exchanges. My next big step was to create my news component/page. I am using rapidAPI's bing search API to gather all relevant news related to the users cryptocurrency of choice (I made a drop down menu with the top 100 currencies that the user can pick from) and this page displays the news in a nice grid format. After that, I did the portfolio section using Apex Charts and allowed the useer to pick currencies and add them to their balance and track the price of their portfolio using the chart. 

Lessons Learned: So far, I would  say I would like to lessen the amount of API calls I am making, as I think that definitely makes the application less accessible to users with a slower internet connection. I think this can be acheived by refactoring some parts of my code, which I will be doing as I want this application to be as accessible as possible to as many users as possible.

Also check out a couple of my other projects:

100 notes: https://github.com/jarrodmjack/100notes

Country info Database: https://github.com/jarrodmjack/country-api
