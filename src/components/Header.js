import { Button } from "./Button"
import { Link } from "react-router-dom"



const Header = () => {

  // const handle

  return (

    <header className="header-style">
      <Link to='/home'>
        <h1 className="title-text">ClearCoin.io</h1>
      </Link>
      <div className='header-btn-container'>

      <Link to='/home'>
      <Button btnText="Home" />
      </Link>
        <Link to="/news">
          <Button btnText="News" />
        </Link>

        <Link to="/portfolio">
          <Button btnText="Portfolio" />
        </Link>

        <Link to="/signin">
          <Button btnText="Sign-in" />
        </Link>

        <Link to='/about'>
          <Button btnText="About" />
        </Link>
        <h1></h1>

      </div>
    </header>
  )
}



export default Header