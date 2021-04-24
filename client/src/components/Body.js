import React, { useEffect } from 'react'

import { Search } from './Search'
import { Header } from './Header'
import { useSelector } from 'react-redux'
import { Album } from './Album/Album'

export const Body = ({history}) => {
  
   const {token} = useSelector(state => state.auth)

   
    return(
        <>
           <Header/>
           <Search history={history}/>
           <Album/>
        </>
    )
}