import React, { createContext, useContext, useState } from "react"

export const ProductContext =createContext();

export function ProductContextProvider({children}){
    const [cart,setCart]=useState([]);
    const [products,setProducts]=useState([]);
    const [showName,setShoeName]=useState();
    const [description,setdescription]=useState();
    const [price,setPrice]=useState();
    const [small,setSmall]=useState(0);
    const [large,setLarge]=useState(0);
    const [medium,setMedium]=useState(0);

    let ItemValue={
        cart:cart,
        setCart:setCart,
        products:products,
        setProducts:setProducts,
        showName:showName,
        setShoeName:setShoeName,
        description:description,
        setdescription,setdescription,
        price:price,
        setPrice:setPrice,
        small:small,
        setSmall:setSmall,
        large:large,
        setLarge,setLarge,
        medium,setMedium
        

    }


    return (
        <ProductContext.Provider value={ItemValue}>
            {children}
        </ProductContext.Provider>
    )
}
