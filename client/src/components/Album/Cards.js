import React from 'react'


export const Card = ({images, name}) => {
 
  console.log(images, name);

  return(
      <div>
          <img src={images[0].url} alt=""/>
          <h1>{name}</h1>
      </div>
  )


}