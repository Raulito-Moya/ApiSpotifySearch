import { types } from "../types/types"

const initialState = {
    artist: 'ej',
    type: 'ej/track,album',
    market: 'ej/US,ES'
}


 export const params = (state = initialState, action) => {

   switch (action.type) {
       case types.params:
           return {
               ...state,
              artist: action.payload.artist,
              type: action.payload.type,
              market: action.payload.market
           }
           
       
   
       default:
         return state
   }

}