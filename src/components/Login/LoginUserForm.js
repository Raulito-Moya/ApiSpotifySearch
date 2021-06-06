import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const LoginFormUser = () => {
   
    const [{correo, password}, handleInputChange ] = useForm({
        correo: '',
        password: ''
    })


    const handleLogin = (e) => {
        e.preventDefault()
        console.log(correo, password);
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