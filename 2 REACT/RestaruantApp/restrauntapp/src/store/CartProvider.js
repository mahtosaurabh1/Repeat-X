import React, { useReducer } from 'react'
import CartContext from './cart-context'

let defaultCartState={
  items:[],
  totalAmount:0
}

let cartReducer=(state,action)=>{
  if(action.type === 'ADD'){
    let updatedItem=state.item.concat(action.item);
    let updatedAmount=state.totalAmount + action.item.price * action.item.amount;
    return{
      items:updatedItem,
      totalAmount:updatedAmount
    }
  }
  return defaultCartState
}

function CartProvider(props) {
  let [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)

    let addItemToCartHandler=(item)=>{
      dispatchCartAction({type:'ADD',item:item})
    }

    let removeItemFromCartHandler=(id)=>{
      dispatchCartAction({tupe:'REMOVE',id:id})
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        remiveItem:removeItemFromCartHandler
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider