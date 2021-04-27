const { response, text } = require('express')
const axios = require('axios')

const client_id = process.env.SPOTIFY_ID
const client_secret = process.env.CLIENT_SECRET


const authToken = (req, res = response) => {
   
  try {
      
    axios({
        url:"https://accounts.spotify.com/api/token",
        method: "post",
        params: {
            grant_type: "client_credentials"
        },
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
       auth: {
        username: client_id,
        password: client_secret
    }
    }).then( obj => { 
        const {data} = obj
        console.log(data);
        res.json({
           ok:true,
           token: data.access_token
        })
     })
    

  } catch (error) {
    console.log(error);  

  }

}




 const authTokenUser = (req, res = response) => {

     try {
        axios({
          url:"https://accounts.spotify.com/authorize",
        method: "get",
        params: {
          client_id:'1de72a570fb94a9fa7dbab6d8dd16c24',
          response_type:'code',
          redirect_uri:'https://spotifysearch.com/callback/'
        },
       /* headers:{
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
       auth: {
        username: client_id,
        password: client_secret
    }*/
 
        }).then( obj => { 
           console.log(obj.data);
          res.json({
            ok: true
          })
       })
     } catch (error) {
       console.log(error);
     }


 }



module.exports= {
    authToken,
    authTokenUser
}