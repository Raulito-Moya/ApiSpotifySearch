import { types } from "../types/types"

const initialState = {
    items: {}
}


 export const items = (state = initialState, action) => {

   switch (action.type) {
       case types.items:
           return {
               ...state,
                items: action.payload
           }
           

       default:
         return state
   }

}