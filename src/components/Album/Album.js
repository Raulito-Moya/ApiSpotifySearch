
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Cards } from './Cards'



export const Album = () => {

  const {items} = useSelector(state => state.items)
   console.log(items);

  //  const {images} = items[8]
   //  const {name} = items[8]
   // images && console.log(images[0]);

    /* useLayoutEffect(()=> { //todo: quiero hacer que al volver el vieport se me quede en el misomo car , no se si uselayoutEffectsea la solucion
        console.log('efecto de useLayouteffect');
     })*/
     if(items[0]){
      console.log(items[0]);
  var  { id,images, name, type,artists, external_urls } = items[0]
     }
   
     
    // console.log(items[0]);

   return(
       <div >
          {
             items[0] && (
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src={images[0].url} className="d-block w-100" alt=""/>
                  <h1>{name}</h1>
                    
                    <Link to={ `./body/card/${id}` }> 
                       Mas... 
                    </Link >
               </div>
               <div className="carousel-item ">
                 <img src={images[0].url} className="d-block w-100" alt=""/>
                </div>
              
            {
                
               items.map( ( { id,images, name, type,artists, external_urls } ) => ( 
               
                   <Cards key = { id } id = { id }  name = { name } images = { images[0].url } type = { type } artists = { artists } url = { external_urls }/>
        
              
                ) ) 
         
              }
              
              </div>
            
           
  
  
  
                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Previous</span>
                     </button>
                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                       <span className="carousel-control-next-icon" aria-hidden="true"></span>
                       <span className="visually-hidden">Next</span>
                     </button>
            </div>     
        

            ) 
          }
          </div>
       

   )
  
}  
