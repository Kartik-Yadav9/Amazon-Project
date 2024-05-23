import React from 'react'
import './Subtotal.css'

import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';



function Subtotal() {

    const[{basket}, dispatch]= useStateValue()
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText= {(value)=>(
                <>
                <p>
                    Subtotal({basket.length} items): <strong>{value}</strong>
                </p>

                <small className='subtotal_gift'> 
                    <input type='checkbox'/>This order contains a gift
                </small>
                </>
            )}
            decimalScale= {2}
            value={getBasketTotal(basket)}
            displayType= {"text"}
            thousandSeparator= {true}
            prefix= {'<span class="material-symbols-outlined currency-size">currency_rupee</span>'}

        />

        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal