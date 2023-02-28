import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Generics from './components/generics/Generics';
import Products from './components/UI/Products';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Contact from './components/contactus/Contact';
import Preview from './components/Preview/Preview';

function App() {

  return (
      <Router>
      <Header/>
      <Generics/>
       <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Products/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contactus' element={<Contact/>} />
        <Route path='/preview/:id' element={<Preview/>}/>
       </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
