import Image from "./Image"

const TrendingBox = ({ trending }) => {



  return (
    <>
      {trending.map((coin, index) => (
        <div key={coin.item.id} className="trending-box-container">
            <h3 className="trending-img-center-fix">{index + 1} <Image src={coin.item.thumb} /> {coin.item.name} 
             </h3> <span className="trending-btc-price">{coin.item.price_btc.toFixed(7)} BTC</span>
           
            </div>
        ))}
    </>
  )
}

export default TrendingBox