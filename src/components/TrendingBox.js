import Image from "./Image"

const TrendingBox = ({ trending }) => {



  return (
    <>
      {trending.map((coin, index) => (
            <h3 key={coin.item.id} className="trending-img-center-fix">{index + 1} <Image src={coin.item.thumb} /> {coin.item.name}</h3>
        ))}
      {/* <div className="trending-img-center-fix">
        <h3 key={trending[0].item.id}>1 <Image src={trending[0].item.thumb} />{trending[0].item.name}</h3>
      </div>
      <div className="trending-img-center-fix">
        <h3 key={trending[1].item.id}>2 <Image src={trending[1].item.thumb} />{trending[1].item.name}</h3>
      </div>
      <div className="trending-img-center-fix">
        <h3 key={trending[2].item.id}>3 <Image src={trending[2].item.thumb} />{trending[2].item.name}</h3>
      </div> */}
    </>
  )
}

export default TrendingBox