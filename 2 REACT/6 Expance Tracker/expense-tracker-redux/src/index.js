import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './store/auth-context';
import authReducer from './redux/authReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rootRducer=combineReducers({
  logged:authReducer
})
let myStore=createStore(rootRducer)
root.render(
 <Provider store={myStore}>
  <AuthContextProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </AuthContextProvider>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
