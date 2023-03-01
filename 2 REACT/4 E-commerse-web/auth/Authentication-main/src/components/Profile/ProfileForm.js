import { useContext, useRef } from 'react';
import AuthContext from '../../store/authcontext';
import { FKey } from '../Auth/secret';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  let authCtx=useContext(AuthContext);
  let inputPasswardRef=useRef();
  let key=FKey;

  let submitHandler=(e)=>{
    e.preventDefault();
    let newinputPassword=inputPasswardRef.current.value;
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${key}`,{
      method:'POST',
      body:JSON.stringify({
        idToken:authCtx.token,
        password:newinputPassword,
       returnSecureToken:false
      }),
      headers:{
       'Content-Type':'application/json'
      }
    }).then((res)=>{
      console.log(res);
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={inputPasswardRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
