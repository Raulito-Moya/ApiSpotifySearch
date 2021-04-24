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