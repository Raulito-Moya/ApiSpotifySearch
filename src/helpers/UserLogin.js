



export const sendAcountData = (data) => {
     
    const method = 'POST'
      const url = 'http://localhost:4000/api/auth/createuser'
    

  try {
      
      return fetch(url,{
        method,
        headers: {
          'Content-Type': 'application/json' 
         },
         body: JSON.stringify(data)
    })

  
  } catch (error) {
      console.log(error);
  }

}


export const sendLogindata = (data) => {

  const method = 'POST'
  const url = 'http://localhost:4000/api/auth/loginuser'


   try {
     
     return fetch(url,{
       method,
       headers: {
         'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
   })
   
   
   } catch (error) {
     console.log(error);
   }
   
}


export const getUserByID = (data) => {

  const method = 'POST'
  const url = 'http://localhost:4000/api/auth/getuserbyid'


   try {
     
     return fetch(url,{
       method,
       headers: {
         'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
   })
   
   
   } catch (error) {
     console.log(error);
   }
  


}