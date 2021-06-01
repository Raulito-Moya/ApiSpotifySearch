import { types } from "../types/types"



 export const setParams = (artist, type, market) => ({
   
    type: types.params,
    payload: {
        artist: artist,
        type: type,
        market: market
    }

})
