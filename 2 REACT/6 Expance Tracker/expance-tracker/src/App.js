import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login.jsx";
import Header from "./components/Home/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Expenses from "./components/Expenses/Expenses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/singup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/expenses' element={ <Expenses/>}/>
      </Routes>
    </Router>
  );
}

export default App;
