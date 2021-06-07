import { types } from "../types/types"

const user = JSON.parse( localStorage.getItem('login'))

const initialState = {
    token:'token',
    nombre:'BD Name',
    login: user.login
}


export const authReducer = (state = initialState, action) => {
   
     switch (action.type) {
         case types.token:
             return {
               ...state,
               login: true,
               nombre: action.payload.user.nombre,
               token: action.payload.token
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