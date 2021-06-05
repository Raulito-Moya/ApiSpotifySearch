import axios from 'axios'


export const fetchAuthUser = () => {
   
  const method = 'GET'
   
// return fetch('http://localhost:4000/api/auth/authorizeuser')

  const url = axios.get('http://localhost:4000/api/auth/authorizeuser',{
    method,
    headers: {
     "Accept": "application/json",
     "Content-Type": "application/json",
     "Access-Control-Allow-Origin": "*"
   }
 
  } 
  )

  return url

}

  
export const fetchToken = (method = 'POST') => {
   
  const client_id = process.env.REACT_APP_SPOTIFYID
  const client_secret = process.env.REACT_APP_CLIENTSECRET

   return fetch('http://localhost:4000/api/auth/token')
   
}




 export const fetchconToken = (token, q, type, market) => {
   
  const method = 'GET'
  console.log(token);
  const url = `https://api.spotify.com/v1/search?q=${q}&type=${type}&market=${market}`
 // console.log(url);

 // const url1 = 'https://api.spotify.com/v1/search'
 
    return axios.get(url,{
         method,
         headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      
    } 
      )

}



export const fetchTrackPhoto = () => {

}



