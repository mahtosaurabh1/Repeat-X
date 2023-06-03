import './App.css';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login';
import ChatHome from './components/chatAppHome/ChatHome';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<ChatHome/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   </Router>
  );
}

export default App;
