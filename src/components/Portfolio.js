import PortfolioChart from "./PortfolioChart"
import Header from "./Header"
// the chart data being passed in here is the same data I am putting into the Coins component. It just has all of the crypto data I need
const Portfolio = ({ chartData }) => { 
  return (
    <>
    <Header  />
    <PortfolioChart chartData={chartData}/>
    </>
  )
}

export default Portfolio