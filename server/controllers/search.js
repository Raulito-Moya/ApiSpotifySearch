const { response } = require('express')
const axios = require('axios')


const search = (req, res = response) => {

    try {
        
       axios({
           url:'https://api.spotify.com/v1/search',
           method: "get",
           params: {
               q:'Ricardo Arjona',
               type:'album',
               market:'US',
               limit: 5,
               offset: 5
           },
           headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer BQBs24pEWuW_TjXrWyFW0WI2Efj1a5hjdcl5Q0kw-UDo82gDZpFYzJM8j6mT8E3X9Ya-xUk-sTE43Oec9FE"
           }

       }).then(obj => {
         console.log(obj.data);
           res.json({
               ok:true,
               data: obj.data
               

           })
       })
   

    } catch (error) {
      console.log(error); 
      res.json({
          ok:false
      })  
    }
   
   }


   module.exports = {
       search
   }