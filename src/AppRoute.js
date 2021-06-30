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
import { getFetchToken, getUserExpecific, loginUser, loginUserSpotify } from './actions/logintoken';
import { DashboardRoutes } from './components/Routes/DashboardRoutes';
import { getCode, getUserSptify } from './helpers/getCode';




export const AppRouter = () => {

  const dispatch = useDispatch();
  
   console.log(process.env);

   const { auth } = useSelector(state => state)
   let login = auth.login


 
   const params = new URLSearchParams(window.location.search);

   useEffect(async() => {
   
    let codigo =  params.get('code')
    console.log(codigo);
    
     const dataspotify = await getUserSptify(codigo)
     console.log(dataspotify);

    
     if( dataspotify ){  
     
       dispatch(loginUserSpotify(dataspotify))
    
  
      }

   },[window.location.href])


  
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