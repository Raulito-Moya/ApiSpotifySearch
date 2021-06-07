import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFetchToken, getAuthorize } from '../../actions/logintoken';
import { CreateUserForm } from './CreateUserForm';
import { LoginFormUser } from './LoginUserForm';

export const LoginScreen = () => {

const dispatch = useDispatch();
   
  const initState = {
    login: true
  }

    const handleLoginSpotify = () => {
       getAuthorize() 
     // dispatch(getFetchToken())
      localStorage.setItem('login',JSON.stringify(initState))
    }

      const [form, setForm] = useState(true)
      const setFormStatus = () => { setForm(!form) }


    return(
      <div className="row">
        
        <div className="loginScreen">
           
          { form && <LoginFormUser/> }

          { !form && <CreateUserForm/> } 
         

         <div className="buttom-change">
           <button type="click" className="btn"  onClick={setFormStatus}>{form ? 'Create a Acount ':'Login User'}</button>
         </div>
         
          
          <div className="item">
            <h4>Login with Spotify</h4>
            <button 
             type="click"
             onClick={handleLoginSpotify}
            >
              <img src="/img/spotify-logo.png" alt=""/>
            </button>
          </div>

        </div>
      </div>
    )
}