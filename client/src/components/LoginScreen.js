import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux'
import { getFetchToken } from '../actions/token';

export const LoginScreen = () => {

const dispatch = useDispatch();
   
  const initState = {
    login: true
  }

    const handleLogin = () => {
      dispatch(getFetchToken())
      localStorage.setItem('login',JSON.stringify(initState))
    }

    
  /*  const handleLoginUser = () => {
       const url = "https://accounts.spotify.com/authorize"
       const method = 'get'

      axios.get(url,{
        method,
        params:{
          client_id:'1de72a570fb94a9fa7dbab6d8dd16c24',
          response_type:'code',
          redirect_uri:'https://spotifysearch.com/callback/'
        }
        
      }).then(e => console.log(e))


    }*/

    return(
        <div>
            <h1>LoginScreen</h1>
            <button 
              type="click"
              onClick={handleLogin}
              >
                Login
            </button>

         
        </div>
    )
}