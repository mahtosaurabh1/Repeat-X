import React, { createContext } from "react"
import ProductsArr from "../components/assets/productList";

let CartProduct=ProductsArr;
export const CartContext =createContext();


export function CartContextProvider({children}){
    let value ={
        showCart:false,
        products:CartProduct,
        totalAmount:0
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
