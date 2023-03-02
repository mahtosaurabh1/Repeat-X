import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../store/productcontext';
import './input.css'
function Input() {
    let productCtx=useContext(ProductContext);
    // console.log(productCtx);
    const [cart,setCart]=useState([]);
    const [products,setProducts]=useState([]);
    const [shoeName,setShoeName]=useState();
    const [description,setdescription]=useState();
    const [price,setPrice]=useState();
    const [small,setSmall]=useState(0);
    const [large,setLarge]=useState(0);
    const [medium,setMedium]=useState(0);
    let [arr,setArr]=useState([]);

    let handleAddProduct=()=>{
        let obj={
            shoeName,description,price,small,medium,large
        }
        productCtx.setProducts([...productCtx.products,obj]);

        fetch('https://shoe-store-2f70c-default-rtdb.firebaseio.com/allshoe.json',{
            method:'POST',
            body:JSON.stringify({
             shoeName,
             description,
             price,
             small,medium,
             large,
             returnSecureToken:true
            }),
            headers:{
             'Content-Type':'application/json'
            }
           }).then(res=>{
           console.log(res);
            fetchDataFromServer()
           }).catch((err)=>{
            alert(err.message)
           })
    }

    let fetchDataFromServer= async ()=>{
         let res= await fetch('https://shoe-store-2f70c-default-rtdb.firebaseio.com/allshoe.json');
          let data= await res.json();
          let loadItem=[];
          for(let key in data){
            loadItem.push({
                id:key,
                shoeName:data[key].shoeName,
                price:data[key].price,
                small:data[key].small,
                medium:data[key].medium,
                large:data[key].large,
                description:data[key].description
              });
          }
          setArr(loadItem)
    }
    useEffect(()=>{
        fetchDataFromServer();
    },[])

    let buySmallHandler=(val)=>{
        let newQty=Number(val.small) -1;
        if(newQty<=0){
            return
        }


        fetch(`https://shoe-store-2f70c-default-rtdb.firebaseio.com/allshoe/${val.id}.json`,{
            method:'PUT',
            body:JSON.stringify({
             shoeName:val.shoeName,
             description:val.description,
             price:val.price,
             small:newQty
             ,medium:val.medium,
             large:val.large,
             returnSecureToken:true
            }),
            headers:{
             'Content-Type':'application/json'
            }
           }).then(res=>{
            fetchDataFromServer();
            let newObj={shoeName:val.shoeName,description:val.description,small:1,price:val.price}
            productCtx.setCart([...productCtx.cart,newObj])
           }).catch((err)=>{
            alert(err.message)
           })
       
     
    }

    let buyLargeHandler=(val)=>{
        let newQty=Number(val.large) -1;
        if(newQty<=0){
            return
        }

        fetch(`https://shoe-store-2f70c-default-rtdb.firebaseio.com/allshoe/${val.id}.json`,{
            method:'PUT',
            body:JSON.stringify({
             shoeName:val.shoeName,
             description:val.description,
             price:val.price,
             small:val.small
             ,medium:val.medium,
             large:newQty,
             returnSecureToken:true
            }),
            headers:{
             'Content-Type':'application/json'
            }
           }).then(res=>{
           console.log(res);
            fetchDataFromServer()
            let newObj={shoeName:val.shoeName,description:val.description,large:1,price:val.price}
            productCtx.setCart([...productCtx.cart,newObj])
           }).catch((err)=>{
            alert(err.message)
           })
       
        
    }

    let buyMediumHandler=(val)=>{
       
        let newQty=Number(val.medium) -1;

        if(newQty<=0){
            return
        }


        fetch(`https://shoe-store-2f70c-default-rtdb.firebaseio.com/allshoe/${val.id}.json`,{
            method:'PUT',
            body:JSON.stringify({
             shoeName:val.shoeName,
             description:val.description,
             price:val.price,
             small:val.small
             ,medium:newQty,
             large:val.large,
             returnSecureToken:true
            }),
            headers:{
             'Content-Type':'application/json'
            }
           }).then(res=>{
           console.log(res);
            fetchDataFromServer()
            let newObj={shoeName:val.shoeName,description:val.description,medium:1,price:val.price}
            productCtx.setCart([...productCtx.cart,newObj])
           }).catch((err)=>{
            alert(err.message)
           })
       
    }
  return (
    <div className="input-container">
         <div className="form-container">
        <div className="smal-form-container">
            <label htmlFor="">ShoeName</label>
            <input type="text" value={shoeName} onChange={(e)=>setShoeName(e.target.value)} />
        </div>
        <div className="smal-form-container">
            <label htmlFor="">Description</label>
            <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} />
        </div>
        <div className="smal-form-container">
            <label htmlFor="">Price</label>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <div className="smal-form-container">
            <label htmlFor="">Small</label>
            <input type="text" value={small} onChange={(e)=>setSmall(e.target.value)} />
        </div>
        <div className="smal-form-container">
            <label htmlFor="">Medium</label>
            <input type="text" value={medium} onChange={(e)=>setMedium(e.target.value)} />
        </div>
        <div className="smal-form-container">
            <label htmlFor="">Large</label>
            <input type="text" value={large} onChange={(e)=>setLarge(e.target.value)} />
        </div>
        <button onClick={handleAddProduct}>Add Product</button>

    </div>
   
   <div className="allproduct-container">
    {
        arr.map((val)=>{
            return(
                <div className="product-container">
        <div className="smal-form-container">
           <label htmlFor="">ShoeName</label>
            <label htmlFor="">{val.shoeName}</label>
        </div>
        <div className="smal-form-container">
        <label htmlFor="">Description</label>
            <label htmlFor="">{val.description}</label>
        </div>
        <div className="smal-form-container">
        <label htmlFor="">Price</label>
            <label htmlFor="">{val.price}</label>
        </div>
        <div className="smal-form-container">
        <label htmlFor="">Small</label>
            <label htmlFor="">{val.small}</label>
        </div>
        <div className="smal-form-container">
        <label htmlFor="">Medium</label>
            <label htmlFor="">{val.medium}</label>
        </div>
        <div className="smal-form-container">
        <label htmlFor="">Large</label>
            <label htmlFor="">{val.large}</label>
        </div>
        <div className="smal-form-container">
       <button onClick={()=>buySmallHandler(val)}>buy small {val.small}</button>
       <button onClick={()=>buyMediumHandler(val)}>buy Medium {val.medium}</button>
       <button onClick={()=>buyLargeHandler(val)}>buy Large {val.large}</button>
        </div>


    </div>
            )
        })
    }
   </div>
    </div>
     )
}

export default Input