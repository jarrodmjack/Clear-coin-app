import Image from "./Image"


const TrustedExchangeBox = ({ trustedExchanges }) => {
  return (
      <>
        {trustedExchanges.map((exchange, i) => (
            <h3 key={exchange.id} className="trusted-img-center-fix">{i + 1} <Image src={exchange.image}/> {exchange.name}</h3>
        ))}
        </>
  )
}

export default TrustedExchangeBox