import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';

function Header() {

  const[{basket}, dispatch]= useStateValue()




  return (
    <div className='header'>
        <Link to= "/">
        <img className='header-logo' src='https://www.pngmart.com/files/23/Amazon-Logo-White-PNG-Image.png'  />
        </Link>

        <div className='header-search'>
            <input type='text' className='header-searchInput'/>
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className='header-nav'>
            <div className="header_option">
              <span className='header_optionLineOne'>Hello Guest</span>
              <span className='header_optionLineTwo'>Sign in</span> 
            </div>

            <div className="header_option">
              <span className='header_optionLineOne'>Returns</span>
              <span className='header_optionLineTwo'>Orders</span> 
            </div>

            <div className="header_option">
              <span className='header_optionLineOne'>Your</span> 
              <span className='header_optionLineTwo'>Prime</span> 
            </div> 
            <Link to= "/Checkout">
              <div className="header_optionBasket">
                <ShoppingBasketIcon/>
                <span className='header_optionLineTwo header_basketCount'>{basket.length}</span> 
              </div> 
            </Link>

        </div>
        
    </div>
  )
}

export default Header