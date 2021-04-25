import React from 'react'
import { useSelector } from 'react-redux'

import { Card } from './Cards'



export const Album = () => {

  const {items} = useSelector(state => state.items)
   
  //  const {images} = items[8]
   //  const {name} = items[8]
   // images && console.log(images[0]);

   return(
       <div>
         {
             // (items.length === 20 ) 

                items.map( ({images, name}) =>( 
                  // console.log(images[1].url);
                  // console.log(name);
                   (images,name) && <Card name={name} images={images}/>
                    
                    
              
                ) ) 
       
              
         }
       </div>

   )
   /*if(items.length === 20 ) {
     // console.log(items);}
  items.map( ({images, name}) =>{
     // console.log(images[1].url);
     // console.log(name);
    if(images){
     return(
       <Card/>
       )
    }
     
 
  }) 
    // todo: buscar porque no me renderea esto en pantalla
     
    /*   return(
        <div>
           
          <div>
             <img src={images[0].url} alt="imagen de album"/> 
             <p>{name}</p>
           </div> 
            
           
           
        </div>
     )

    
 
   
} else{
  return <div>
    <h1>album aqui</h1>
  </div> 
}*/
 


   
   

}  
