import { types } from "../types/types"

const user = JSON.parse( localStorage.getItem('login'))

const initialState = {
    token:'token',
    login: user.login
}


export const authReducer = (state = initialState, action) => {
   
     switch (action.type) {
         case types.token:
             return {
               ...state,
               login: true,
               token: action.payload
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