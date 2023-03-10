import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/authcontext';


import classes from './AuthForm.module.css';
import { FKey } from './secret';

const AuthForm = () => {
  const [isLoading,setIsLoading]=useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  let history=useHistory();



  let key=FKey;
  let authCtx=useContext(AuthContext);



  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    setIsLoading(true)
    let url;
    if(isLogin){
       url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
    }else{
      url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
    }
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
       email,password,
       returnSecureToken:true
      }),
      headers:{
       'Content-Type':'application/json'
      }
     }).then(res=>{
       setIsLoading(false)
       if(res.ok){
          return res.json();
       }else{
       return res.json().then(data=>{
         // console.log(data);
         let errorMessage='Authencation failed...'
         if(data && data.error && data.error.message){
          errorMessage=data.error.message;
         }
         throw new Error(errorMessage)
        }) 
       }
     }).then((data)=>{
      // console.log(data);
      authCtx.login(data.idToken);
      history.replace('/')
     }).catch((err)=>{
      alert(err.message)
     })
   }
  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            onChange={(e)=>{setPassword(e.target.value)}}
            type='password'
            id='password'
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button> {isLogin ? 'Signin' : 'Signup'}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
