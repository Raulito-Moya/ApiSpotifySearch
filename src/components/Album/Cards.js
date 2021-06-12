import React from 'react'
import { Redirect, Link } from "react-router-dom";

export const Cards = ({ id, images, name, type, url,artists }) => {
 
    console.log(id);

  return( 
      <div className="carousel-item"> 
         {
           (type === 'album') 
               ? 
              (
                  
                     <img src={images} className="d-block w-100" alt=""/>
                   

                 
              
             ) 
               : 
             (
               <div>
                 <h1>{name}</h1>
                 
               </div>
             )
             
           }
          
      </div>
  )


}