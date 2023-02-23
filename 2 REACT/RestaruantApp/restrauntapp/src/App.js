import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
// import CartProvider from './components/store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  let showCartHandler=()=>{
    setCartIsShown(true);
  }

  let hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
      </CartProvider> 
    );

}

export default App;
