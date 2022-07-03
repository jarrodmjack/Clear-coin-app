import Image from "./Image"


const TrustedExchangeBox = ({ trustedExchanges }) => {
  return (
    <>
      {trustedExchanges.map((exchange, i) => (
        <div key={exchange.id} className="trusted-box-container">
          <h3 className="trusted-img-center-fix">{i + 1} <Image src={exchange.image} /> {exchange.name}</h3>
          <span className="trusted-btc-vol">24hr Vol {exchange.trade_volume_24h_btc.toFixed(0)} BTC</span>
        </div>
      ))}
    </>
  )
}

export default TrustedExchangeBox