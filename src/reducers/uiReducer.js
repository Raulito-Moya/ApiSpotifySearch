import { types } from "../types/types"



const initialState = {
   msg:false //en caso de que haya u bad request
}


export const uiReducer = (state = initialState, action) => {
   
     switch (action.type) {
         case types.uierrorForm:
             return {
               ...state,
               msg: action.payload.msg

             }
         case types.cleanError:
           return {
             ...state,
             msg: false
           }    

        
             
             
     
         default:
           return state
     }

}