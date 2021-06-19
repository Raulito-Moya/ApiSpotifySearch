import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFetchToken, getAuthorize } from '../../actions/logintoken';
import { CreateUserForm } from './CreateUserForm';
import { LoginFormUser } from './LoginUserForm';

export const LoginScreen = () => {



  const initState = {
    login: true
  }
  const { ui } = useSelector(state => state)   



    const handleLoginSpotify = () => {
      const data = getAuthorize() 
    
    //  console.log(data);
     // dispatch(getFetchToken())
      //localStorage.setItem('login',JSON.stringify(initState))
    }

    


      const [form, setForm] = useState(JSON.parse(localStorage.getItem('formvalue')) )
      let formValue = 'value' //el value para renderear cada formulario

      const setFormStatus = () => { 
        setForm(!form) 
        console.log(form); 
        }

        JSON.stringify(localStorage.setItem('formvalue',form )) //aqui mando esto fuera del setFormSatus ya que si lo mnado dentro no me coge el valor cambioado por el setState
       formValue = JSON.parse(localStorage.getItem('formvalue')) 
       console.log(formValue);
 


    return(
      <div className="row">
        
        <div className="loginScreen">
           
          { formValue && <LoginFormUser/> }

          { !formValue && <CreateUserForm/> } 
         
          {ui.msg && <h5>Usuario o Contrasena incorrectos</h5>}
         <div className="buttom-change">
           <button type="click" className="btn"  onClick={setFormStatus}>{formValue ? 'Create a Acount ':'Login User'}</button>
         </div>
         
          
          <div className="item">
            <h4>Login with Spotify</h4>
            <button 
             type="click"
             onClick={handleLoginSpotify}
            >
              <img src="/img/spotify-logo.png" alt=""/>
            </button>
          </div>

        </div>
      </div>
    )
}