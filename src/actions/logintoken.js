import { getUserByID, sendAcountData, sendLogindata } from "../helpers/UserLogin";
import { fetchAuthUser, fetchconToken, fetchToken } from "../helpers/fetch"
import { types } from "../types/types"
import { cleanError, errorFormLogin } from "./ui";
import {getToken} from '../helpers/fetch'

export const getAuthorize = async() => {
   const url = await fetchAuthUser()
   window.location.href = url.data

     
}


export const createAcount= (data) => {
  return async(dispatch) => {
      
      const res = await sendAcountData(data) 
      const body = await res.json()
       console.log(body);
       if(body.msg){
          dispatch(errorFormLogin(body))
       } else{
          dispatch(getUser(body))
        
       }
      
  }

}

export const loginUser = (data) => {
   return async(dispatch) => {

    const res = await sendLogindata(data)
    const body = await res.json()

    if(body.msg){
       dispatch(errorFormLogin(body))
    }else{
       console.log(body);
     
       dispatch(getUser(body))
       dispatch(cleanError())
    }
    


   }
  
}


export const loginUserSpotify = (data) => ({
  
    type: types.login,
    payload: data

})


export const getUserExpecific = (data) => {
  return async(dispatch) => {

    const res = await getUserByID(data)
    const body = await res.json()
    console.log(body);

    dispatch(getUser(body))

  }



}



export const getUser = (data) => ({
   
    type: types.login,
    payload: data

})


export const logout = () => ({

   type: types.logout

})