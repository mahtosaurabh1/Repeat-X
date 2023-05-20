import './App.css';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Signup from './components/Signup/Signup.jsx'

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/register' element={<Signup/>}/>
    </Routes>
   </Router>
  );
}

export default App;
