import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, product_info, product_price, rating, img}) {

    const[state, dispatch]= useStateValue()

    const removeFromBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            payload:id

        })
    }

  return (
    <div className='checkoutProduct'>
        <img  className='checkoutProduct_image' src= {img} />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{product_info}</p>
            <p className='checkoutProduct_price'>
                <small>₹</small>
                <strong>{product_price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {
                    Array(rating).fill().map((_,index)=>
                    <p key={index}>⭐</p>)
                }
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct