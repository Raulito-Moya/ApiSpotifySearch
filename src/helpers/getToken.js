 
 
  export const getToken = async(data) => {   //me quede aca quiero hacer la autenticacion por spotify desde aquidesde el front y neceistp el codigo del url

    const params = new URLSearchParams(window.location.search);
     
    let codigo = params.get('code')
    console.log(codigo);
    const url = 'http://localhost:4000/api/auth/usertokenauth' 
      
     if(codigo){
        codigo = { codigo: codigo}  
     }else{
       console.log('no hay codigo');
     }
      
    
    if(codigo){
  
      fetch(url, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
          
        }, 
        body:  JSON.stringify(codigo)
       })
       .then( resp =>  resp.json() )
       .then( data => { 
             return data  
         
           
         })
       .catch( console.log() )
    
    }
  
    
  
  }

  getToken()