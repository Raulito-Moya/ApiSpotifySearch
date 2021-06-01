import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';


export const CardReview = ({match, history}) => {
     
       const {items} = useSelector(state => state.items)
          console.log(items);
      const {id} = match.params
     
     if(items.length === 0){
        return <Redirect to="/body"/>
     }
    

   const element = items.filter((item) => {
          return item.id === id
       
       });
     console.log(element);
     
     

    const {name, images, artists, external_urls,release_date, total_tracks, type} = element[0];
     const {spotify} = external_urls
    console.log(name, images, artists, external_urls,release_date, total_tracks, type);
    console.log(images[0]);

   
    const handleReturn = () => {

       history.push('/body')

    }

 return(
     <div>
         <h1> Card Review </h1>
         <img src={images[1].url} alt="imagen de card"/>
         <div>
               <h3>type: {type}</h3>
               <h3>name: {name}</h3> 
               <h3>total trakcks: {total_tracks}</h3>
               <h3>release date: {release_date}</h3>
                <a href={spotify}>Escuchar en Spotify</a>
         </div>
         <div>
             <h3></h3>
         </div>
         <button type="click" onClick={handleReturn}>Return</button>
     </div>
 )

}
