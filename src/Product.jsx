import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'


function Product({id,product_info, product_price,  rating, img }) {
     
    const[{basket}, dispatch]= useStateValue() 

    console.log("this is the basket", basket);

    const addToBasket=()=>{
        
        //dispatch item into datalayer\
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
                product_info: product_info,
                img: img,
                product_price: product_price,
                rating:rating 
            }
        })
    }


    return (
    <div className='product'>

        <div className="product_info">
            <p>{product_info}</p>
            <p className='product_price'>
                <small><span className="material-symbols-outlined currency-size">currency_rupee</span></small>
                
                
                <strong>{product_price}</strong>
            </p>
            <div className="product_rating">
            {
                Array(rating).fill().map((_,index) => (
                    <p key={index}>⭐</p>
                ))
            }
            </div>
        </div>

        <img src= {img}/>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product