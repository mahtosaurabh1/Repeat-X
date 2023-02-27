
import React, { useEffect, useState } from "react"

export const CartContext = React.createContext();

export function CartContextProvider({children}){
    let [showCart,setShowCart] = useState(false);
   
    let showValue = showCart;
    return (
        <CartContext.Provider value={showValue}>
            {children}
        </CartContext.Provider>
    )
}