import { types } from "../types/types"

const user = JSON.parse( localStorage.getItem('login') )

const initialState = {
    nombre:'BD Name',
    login: user,
    token:'token',
    uid: 'uid'
}


export const authReducer = (state = initialState, action) => {
   
     switch (action.type) {
         case types.login:
             return {
               ...state,
               login: true,
               nombre: action.payload.user.nombre,
               token: action.payload.token,
               uid: action.payload.user.uid

             }

         case types.logout:
            return {
              login: false,
              token: null
            }    
             
             
     
         default:
           return state
     }

}