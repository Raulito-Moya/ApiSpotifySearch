import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import { CardReview } from '../Album/CardReview';
import { Body } from '../Body';

  
  

export const DashboardRoutes = () => {
    return(
        <div>
            <Switch>
               <Route exact path='/body' component={Body}/>
               <Route exact path='/body/card/:id' component={CardReview}/>
               <Redirect to='/body' />
            </Switch>

        </div>
    )
  


}