import { getUserByID, sendAcountData, sendLogindata } from "../helpers/UserLogin";
import { fetchAuthUser, fetchconToken, fetchToken } from "../helpers/fetch"
import { types } from "../types/types"
import { cleanError, errorFormLogin } from "./ui";
import {getToken} from '../helpers/fetch'

export const getAuthorize = async() => {
   const url = await fetchAuthUser()
   window.location.href = url.data
   console.log(url.data);
   console.log(url.data);
   
 //  const data =  getToken(url.data)
  // return data
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


export const getUserExpecific = (data) => {
  return async(dispatch) => {

    const res = await getUserByID(data)
    const body = await res.json()
    console.log(body);

    dispatch(getUser(body))

  }



}


 /*export const getFetchToken = () => {  //esto no todavia
    return async(dispatch) => {

    const  res = await fetchToken();
     const {token} = await res.json();
     console.log(token);
      dispatch(getUser(token))
    }
 }*/



export const getUser = (data) => ({
   
    type: types.login,
    payload: data

})


export const logout = () => ({

   type: types.logout

})