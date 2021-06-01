import React from 'react'
import { Redirect, Link } from "react-router-dom";

export const Cards = ({ id, images, name, type, url,artists }) => {
 
    console.log(id);

  return( 
      <div> 
           
           {
             (type === 'album') 
               ? 
              (
              <div>
                 <img src={images[0].url} alt="imagen de album o track"/>
                 <h1>{name}</h1>
                 <a href={url.spotify}>escuchar en spotify</a>
                 <Link to={ `./body/card/${id}` }> 
                    Mas... 
                 </Link >
              </div>
             ) 
               : 
             (
               <div>
                 <h1>{name}</h1>
                 <a href={url.spotify}>escuchar en spotify</a>
               </div>
             )
             
           }
          
      </div>
  )


}