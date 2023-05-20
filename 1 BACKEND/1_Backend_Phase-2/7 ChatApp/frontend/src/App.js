import './App.css';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Router>
  );
}

export default App;
