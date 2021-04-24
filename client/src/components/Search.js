import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setParams } from '../actions/params';
import { search } from '../actions/search';
import { logout } from '../actions/token';
import { useForm } from '../Hooks/useForm'




export const Search = ({history}) => {
       
    const dispatch = useDispatch();

     const initState = {
         artist: '',
         type: 'album',
         market: 'US'
     } 

    const [{artist, type, market}, handleInputChange] = useForm(initState)
    const {auth, params} = useSelector(state => state)

      const {token} = auth

     const handleSubmit = async(e) => {
         e.preventDefault()
      await dispatch(setParams(artist, type, market))
         dispatch(search(token, artist, type, market))
       }

       
     const handleLogout = () => {
        
        history.replace('/login')
        dispatch(logout())
        localStorage.setItem('login', JSON.stringify(auth))
          
     }  

    return(
        <div>
           <form class="mb-3" onSubmit={handleSubmit}>
             <label for="exampleFormControlInput1" class="form-label">escriba su artista</label>
             <input 
                type = "text" 
                class = "form-control" 
                id = "exampleFormControlInput1" 
                placeholder = "nombre de un artista" 
                onChange = {handleInputChange}
                name = 'artist'
              />
          
           <label >Seleccione un type</label>
           <select class="form-select" aria-label="Default select example" onChange={handleInputChange} value={type} name='type'>
             
             <option value="album" selected>album</option>
             <option value="Artist">artist</option>
             <option value="track">track</option>
           </select>  

           <label>Seleccione un market</label>
           <select class="form-select" aria-label="Default select example" onChange={handleInputChange} value={market} name='market'>
           
             <option value="US" selected>US</option>
             <option value="ES">ES</option>
             
           </select> 
           <button type="submit">Go</button>    
          
        </form>     
         <button type="click" onClick={handleLogout}>Logout</button>
      </div>
    )

}