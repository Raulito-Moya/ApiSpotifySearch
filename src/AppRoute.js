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
  


   const { auth } = useSelector(state => state)
   let login = auth.login
  // let dataspotify =  JSON.parse( localStorage.getItem('data') ) 
   
   //login = JSON.parse( localStorage.getItem('login') ) 
  /* useEffect(()=> {
     //if(auth.login !== false  ){
     //   login = JSON.parse( localStorage.getItem('login') ) 
        console.log(login);
    // }
     
     if (login === 'undefined') {
       login = false
     }

   })*/

   let dataspotify = false
 
   /*const params = new URLSearchParams(window.location.search);
   console.log(window.location.href);
   //console.log(params.values().next());
   let codigo =  params.get('code')*/
   //console.log(codigo); 
   const params = new URLSearchParams(window.location.search);

   useEffect(async() => {
   
    let codigo =  params.get('code')
    console.log(codigo);
    
     const dataspotify = await getUserSptify(codigo)
     console.log(dataspotify);

    
     if(dataspotify  ){  
       console.log( typeof(dataspotify) );
       console.log(dataspotify.user);
       console.log('pase la validacion');
       
       dispatch(loginUserSpotify(dataspotify))
      /* if(auth.login !== false  ){
       // login = JSON.parse( localStorage.getItem('login') ) 
        console.log(login);
       }*/
       console.log('me autentique');
       console.log(login);
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