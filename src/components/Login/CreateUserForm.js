import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';

import { useForm } from '../../Hooks/useForm'
import { createAcount } from '../../actions/logintoken'
import { sendAcountData } from '../../helpers/UserLogin'
import { passwordError } from '../../actions/ui'


export const CreateUserForm = () => {

     const dispatch = useDispatch()
     const { auth } = useSelector( state => state )
  
    const [{nombre,correo, password,confirmPassword}, handleInputChange ] = useForm({
        nombre:'',
        correo: '',
        password: '',
        confirmPassword:''
    })


    const handleCreateUser = async(e) => {
 
      try {
        
        console.log(nombre,correo,password);
        e.preventDefault()
           if(password !== confirmPassword ){
             Swal.fire('Error', 'Las contrasenas deben ser igaules','error')
           }else if(nombre.length <= 2){
            Swal.fire('Error', 'El nombre deben ser un nombe valido','error')
           } else if(correo.length <= 7){
             Swal.fire('Error', 'El correo debe ser un correo valido','error')
           } else{
             dispatch(createAcount({nombre,correo,password})) 
             localStorage.setItem('login', JSON.stringify(auth.login))
           }


      } catch (error) {
        console.log(error);
      }

     
             
         
    }




  return(

    <div className="row item">
         
      <form type='submit' className="col-sm-12">
          <h2>Create a Account</h2>
          <label className="form-label user">Name</label>
          <input type="click" name="nombre" value={nombre} onChange={handleInputChange} className="form-control name" placeholder="nombre"/>

          <label className="form-label user">Correo</label>
          <input type="click" name="correo" value={correo} onChange={handleInputChange}  className="form-control" placeholder="name@example.com"/>
          <label className="form-label user">Password</label>
          <input type="click" name="password" value={password} onChange={handleInputChange} className="form-control " placeholder="password"/>
          <input type="click" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} className="form-control " placeholder="Confirm Password"/>


          <button type="submit" onClick={handleCreateUser} className="buttom">LoginUser</button>
       </form>
       
    </div>


  )



}