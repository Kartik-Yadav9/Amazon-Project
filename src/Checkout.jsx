import React from 'react'
import './Checkout.css'
import Header from './Header'
import img1 from './Images/shopping-cart-ad.png'
import Subtotal from './Subtotal'


function Checkout() {
  return (
    <>
    <Header/>
    
    <div className="checkout">
        <div className='checkout_left'>
            <img  className='checkout_ad' src= {img1}/>
            <div>
                <h2 className="checkout_title">Your Shopping Basket</h2>
            </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>

        </div>

    </div>
    
     

     </>
  )
}

export default Checkout