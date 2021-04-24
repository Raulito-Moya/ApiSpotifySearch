import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'

export const PublicRoute = ({isLoged, component:Component}) => {
 console.log(isLoged);
  return(
      <Route component = { (props) => (!isLoged) ? (<Component {...props}/>) : (<Redirect to="/search"/>) } />
  )

}