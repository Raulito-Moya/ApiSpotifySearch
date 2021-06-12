import { types } from "../types/types"



 export const errorFormLogin = (data) => ({

   type: types.uierrorForm,
   payload: data

})

export const cleanError = () => ({

  type: types.cleanError

})



