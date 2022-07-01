import { Button } from "./Button"


const Header = () => {
  return (
    <header className="header-style">
    <h1 className="title-text">ClearCoin.io</h1>
    <div className='header-btn-container'>
    <Button btnText="Portfolio"/>
    <Button btnText="Sign-in"/>
    </div>
  </header>
  )
}



export default Header