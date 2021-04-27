import React from 'react'
import { useSelector } from 'react-redux'

import { Cards } from './Cards'



export const Album = () => {

  const {items} = useSelector(state => state.items)
   console.log(items);

  //  const {images} = items[8]
   //  const {name} = items[8]
   // images && console.log(images[0]);

   return(
       <div>
         {
            
                items.map( ({id,images, name, type,artists, external_urls}) => ( 
               
                   <Cards key={id} id={id}  name={name} images={images} type={type} artists={artists} url ={external_urls}/>
        
              
                ) ) 
         
         }
       </div>

   )
  
}  
