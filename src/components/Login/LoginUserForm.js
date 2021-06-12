import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { loginUser } from '../../actions/logintoken';
import { useForm } from '../../Hooks/useForm'


export const LoginFormUser = () => {
 
  const dispatch = useDispatch();
  const { auth } = useSelector( state => state )

    const [{correo, password}, handleInputChange ] = useForm({
        correo: '',
        password: ''
    })
 
    
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(correo, password);
        
         if(correo.length <= 7){
          Swal.fire('Error', 'El correo debe ser un correo valido','error')
        } else{
         dispatch(loginUser({correo,password}))
         localStorage.setItem('login', JSON.stringify(auth.login))
        }
        
    }
       
   

  return(

    <div className="row item">
         
      <form type='submit' className="col-sm-10">
          <h2>Login</h2>
          <label className="form-label user">Correo</label>
          <input className="form-control name" type="click" name="correo" value={correo}  onChange={handleInputChange} placeholder="correo"/>
          
          <label className="form-label user">Password</label>
          <input className="form-control" type="click" name="password" value={password} onChange={handleInputChange}  placeholder="Password"/>
          
          <button type="submit" onClick={handleLogin} className="buttom">LoginUser</button>
       </form>
       
    </div>


  )



}