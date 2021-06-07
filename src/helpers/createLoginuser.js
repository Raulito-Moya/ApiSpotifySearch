



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