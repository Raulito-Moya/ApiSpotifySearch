import React from 'react'
import { useDispatch } from 'react-redux'

import { useForm } from '../../Hooks/useForm'
import { createAcount } from '../../actions/logintoken'
import { sendAcountData } from '../../helpers/createLoginuser'


export const CreateUserForm = () => {

     const dispatch = useDispatch()
   
    const [{nombre,correo, password,confirmPassword}, handleInputChange ] = useForm({
        nombre:'',
        correo: '',
        password: '',
        confirmPassword:''
    })


    const handleCreateUser = async(e) => {
      console.log(nombre,correo,password);
        e.preventDefault()
          dispatch(createAcount({nombre,correo,password}))  // todo: voy a dejarlo aqui ya puedo logear usuarios y guardarlos enmi bd hsta manana ;)
        
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