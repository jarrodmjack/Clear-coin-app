
const GlobalCurrencyData = ({ globalCurrencyData, globalMcapPercentage }) => {
  return (
    <div className="global-currency-data-container">
      <h3 className="todays-crypto-title">Today's Cryptocurrency Market Cap</h3>
      <p>The global crypto market cap is <span>${globalCurrencyData}CAD</span>, which is a <span className={globalMcapPercentage.includes('-') ? 'red' : 'green'}>{globalMcapPercentage}%</span> {globalMcapPercentage.includes('-') ? 'decrease' : 'increase'}  over the last 24 hours.</p>
      <span className='current-time'>Updated at {time}</span>
    </div>
  )
}

const currentdate = new Date(); 
const time = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`


export default GlobalCurrencyData