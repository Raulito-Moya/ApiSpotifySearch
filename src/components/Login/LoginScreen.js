import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFetchToken, getAuthorize } from '../../actions/token';

export const LoginScreen = () => {

const dispatch = useDispatch();
   
  const initState = {
    login: true
  }

    const handleLogin = () => {
       getAuthorize() 
     // dispatch(getFetchToken())
      localStorage.setItem('login',JSON.stringify(initState))
    }

      const [form, setForm] = useState(true)
      const setFormStatus = () => { setForm(!form) }


    return(
        <div>
          <h1>LoginScreen</h1>
            
          {
            form && (
             <form type='submit'>
               <h2>Login</h2>
               <input type="click" name="nombre" className="form-control"/>
               <input type="click" name="correo" className="form-control" />
            </form>
            )
          }

         {
            !form && (
             <form type='submit'>
               <h2>Create a account</h2>
               <input type="click" name="nombre" className="form-control" />
               <input type="click" name="correo" className="form-control"/>
            </form>
            )
          } 
         <button type="click" className=" btn primary" onClick={setFormStatus}>{form ? 'Login User':'Create a acount'}</button>
          
          <div>
            <h4>Login with Spotify</h4>
            <button 
             type="click"
             onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
    )
}