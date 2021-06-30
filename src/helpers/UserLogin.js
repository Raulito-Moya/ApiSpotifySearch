



export const sendAcountData = (data) => {
     
    const method = 'POST'
      const url = `${process.env.REACT_APP_API_URL}/auth/createuser`
    

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
  const url = `${process.env.REACT_APP_API_URL}/auth/loginuser`

  console.log(url);
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
  const url = `${process.env.REACT_APP_API_URL}/auth/getuserbyid`


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