import { fetchAuthUser, fetchconToken, fetchToken } from "../helpers/fetch"
import { types } from "../types/types"


export const getAuthorize = async() => {
   const url = await fetchAuthUser()

   console.log(url.data);
   window.location.assign(url.data)
}


 export const getFetchToken = () => {  //esto no todavia
    return async(dispatch) => {

    const  res = await fetchToken();
     const {token} = await res.json();
     console.log(token);
      dispatch(getToken(token))
    }
 }



export const getToken = (token) => ({
   
    type: types.token,
    payload: token

})


export const logout = () => ({

   type: types.logout

})