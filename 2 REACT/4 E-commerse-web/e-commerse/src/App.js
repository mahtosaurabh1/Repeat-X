import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Generics from './components/generics/Generics';
import Products from './components/UI/Products';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';


function App() {
  return (
    <Router>
      <Header/>
      <Generics/>
       <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Products/>}/>
        <Route path='/home' element={<Home/>}/>
       </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
