import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


import { PrivateRoute } from './components/Routes/PrivateRoute';
import { PublicRoute } from './components/Routes/PublicRoute';
import { Body } from './components/Body'
import { LoginScreen } from './components/Login/LoginScreen';


import { useDispatch, useSelector } from 'react-redux';
import { getFetchToken } from './actions/token';
import { DashboardRoutes } from './components/Routes/DashboardRoutes';



export const AppRouter = () => {

  const dispatch = useDispatch();

 
 //   console.log(user);
   const { auth } = useSelector(state => state)
   
    if(auth.token === 'token' || auth.token === null /*que no tinee token */ ){
        auth.login = false
       }

   useEffect(() => {
    
     if(auth.login === false || auth.login === null) {
       localStorage.setItem('login', JSON.stringify(auth))
     }
   
    

    },[auth.login])

  
    return(

    <Router>
      <Switch>
        <PublicRoute exact path='/login' component = { LoginScreen }  isLoged = { auth.login } />
        <PrivateRoute  path='/' component = { DashboardRoutes }  isLoged = { auth.login } />
        <Redirect to='/login' />
      </Switch>
    </Router>
    )
    


}