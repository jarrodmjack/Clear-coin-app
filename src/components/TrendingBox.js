

const TrendingBox = ({ trending }) => {



  return (
    <>
        {trending.map((coin) => (
            <h3 key={coin.item.id}>{coin.item.name}</h3>
        ))}
    </>
  )
}

export default TrendingBox