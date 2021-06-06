import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const CreateUserForm = () => {
   
   
    const [{nombre,correo, password,confirmPassword}, handleInputChange ] = useForm({
        nombre:'',
        correo: '',
        password: '',
        confirmPassword:''
    })


    const handleLogin = (e) => {
        e.preventDefault()
        console.log(correo, password);
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


          <button type="submit" onClick={handleLogin} className="buttom">LoginUser</button>
       </form>
       
    </div>


  )



}