import React from 'react'
import './Coin.css'
import { FaCaretDown } from 'react-icons/fa'
import { FaCaretUp } from 'react-icons/fa'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'></img>
                    <h1 className='currency-name-title'>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                    <p className='coin-percent red'><FaCaretDown />{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'><FaCaretUp />{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='coin-marketcap'>
                        ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin