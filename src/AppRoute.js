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

import { LoginScreen } from './components/Login/LoginScreen';


import { useDispatch, useSelector } from 'react-redux';
import { getFetchToken, getUserExpecific } from './actions/logintoken';
import { DashboardRoutes } from './components/Routes/DashboardRoutes';



export const AppRouter = () => {

  const dispatch = useDispatch();

 
 //   console.log(user);
   const { auth } = useSelector(state => state)
   let login = auth.login
   
       
   useEffect(()=> {
     if(auth.login !== false  ){
        login = JSON.parse( localStorage.getItem('login') ) 
        console.log(login);
     }
     
     if (login === 'undefined') {
       login = false
     }
   })

  
    return(

    <Router>
      <Switch>
        <PublicRoute exact path='/login' component = { LoginScreen }  isLoged = { login } />
        <PrivateRoute  path='/' component = { DashboardRoutes }  isLoged = { login } />
        <Redirect to='/login' />
      </Switch>
    </Router>
    )
    


}