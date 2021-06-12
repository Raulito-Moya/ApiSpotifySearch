import React, { useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'

import { Search } from './Search'
import { Header } from './Header'
import { Album } from './Album/Album'
import { getUserExpecific } from '../actions/logintoken'
import CarouselAlbum from '../components/Album/Carousel'


export const Body = ({ history }) => {
    
   const dispatch = useDispatch();  
    
   const { auth } = useSelector( state => state )
    
   if(auth.uid !== 'uid'){
      localStorage.setItem('uid',auth.uid) 
   }
    let uid = localStorage.getItem('uid')
   
    
     useEffect(()=> {
        if(auth.uid === 'uid'){
          dispatch(getUserExpecific({uid})) 
        }
       localStorage.setItem('login', JSON.stringify(auth.login))

     },[uid])
 
   
   

   return(
      <>
         <Header />
         <Search history={history} />
         <CarouselAlbum/>
      </>
  )
}