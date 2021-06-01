import { fetchconToken } from "../helpers/fetch"
import { types } from "../types/types";


export const search = (token, q, type, market) => {
   return async(dispatch) => {
   
    const res = await fetchconToken(token,q,type,market);
      
     const {data} = await res
     console.log(data);
      if(data.albums){

          const {items} = data.albums
        // console.log(items);
         dispatch(getItems(items))

      }else if (data.tracks) {

         const {items} = data.tracks
         console.log(items);
         dispatch(getItems(items))
      }
   }
   


}


export const getItems = (items) => ({
  
   type: types.items,
   payload: items

})