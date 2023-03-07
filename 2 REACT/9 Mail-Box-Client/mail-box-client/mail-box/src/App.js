import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import EmailCompose from './components/EmailCompose/EmailCompose';
import { Header } from './components/Header/Header';
import Inbox from './components/Inbox/Inbox';
import Login from './components/Login/Login';
import Sent from './components/Sent/Sent';
import Signup from './components/Signup/Signup';

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<EmailCompose/>}/>
      <Route path='/singup' element={ <Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/inbox' element={<Inbox/>}/>
      <Route path='/sent' element={<Sent/>}/>
    </Routes>
  </Router>
  );
}

export default App;
