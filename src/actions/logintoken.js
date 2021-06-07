import { sendAcountData } from "../helpers/createLoginuser";
import { fetchAuthUser, fetchconToken, fetchToken } from "../helpers/fetch"
import { types } from "../types/types"


export const getAuthorize = async() => {
   const url = await fetchAuthUser()

   console.log(url.data);
   window.location.assign(url.data)
}


export const createAcount= (data) => {
  return async(dispatch) => {

      const res = await sendAcountData(data) 
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
   
    type: types.token,
    payload: data

})


export const logout = () => ({

   type: types.logout

})