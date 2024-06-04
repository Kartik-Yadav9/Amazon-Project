import React from 'react'
import './Checkout.css'
import Header from './Header'
import img1 from './Images/shopping-cart-ad.png'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'


function Checkout() {
   const [{basket, user}, dispatch]= useStateValue()

  return (
    <>
    <Header/>
    
    <div className="checkout">
        <div className='checkout_left'>
            <img  className='checkout_ad' src= {img1}/>
            <div>
                <h3>Hello, {user.email}</h3>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                 {
                    basket.map(itemS => {
                        return(
                        <CheckoutProduct
                            id={itemS.id}
                            product_info= {itemS.product_info}
                            img={itemS.img}
                            product_price= {itemS.product_price}
                            rating={itemS.rating}
                                                                            //img coming from basket  and item.img used as prop in checkoutproduct
                        />
                        )

                    })
                 }
                
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