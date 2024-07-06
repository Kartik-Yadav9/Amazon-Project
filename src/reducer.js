export const innerInitialState= {
    basket: [],
    user: null
}

//selector

// export const getBasketTotal=(basket)=>{
//     return basket?.reduce((amount, item)=>  amount + item.product_price , 0)
// }

export const getBasketTotal=(basket)=>{
   return  basket.reduce((amount, item)=> amount + item.product_price, 0)
}

const reducer= (state, action)=>{

    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item]
            };

        case "REMOVE_FROM_BASKET":                                                      
            const index= state.basket.findIndex(                            //function inside findindex
                (basketItem)=> basketItem.id=== action.id
                                                                         
            );

            let newBasket= [...state.basket];

            if(index>= 0){
                newBasket.splice(index, 1)   
            }
            else{
                console.warn("can't remove product, it is not present");
            }


            return{
                ...state,
                basket: newBasket 
            }

        case "SET_USER":
            return{
                ...state,
                user: action.user
            }


            default :
            return state;
    }    
}

export default reducer;