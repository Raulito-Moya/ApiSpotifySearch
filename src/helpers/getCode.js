 
 export const getCode = async() => {   //me quede aca quiero hacer la autenticacion por spotify desde aquidesde el front y neceistp el codigo del url
        

  const params = new URLSearchParams(window.location.search);
  let codigo =  params.get('code')
 // console.log(codigo);
 
    
   if(codigo){
      codigo = { codigo: codigo} 
     console.log('se llamo');
       
          
   const url = 'http://localhost:4000/api/auth/usertokenauth' 

    fetch(url, {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
        
      }, 
      body:  JSON.stringify(codigo)
     })
     .then( resp =>  resp.json() )
     .then( data => { 
          console.log(data);   
          /*localStorage.setItem('data',JSON.stringify(data))
          localStorage.setItem('login', JSON.stringify(true))*/
          //let dataspotify = localStorage.getItem('login', JSON.parse(localStorage.getItem('data')))  
          return data
          
       })
     .catch( console.log() )


 
   }else{
     console.log('no hay codigo');
   }
    
  
  
  }





 export const getUserSptify = (codigo) => {
 
     if(codigo){
       codigo = { codigo: codigo} 
      console.log('se llamo');
        
           
    const url = 'http://localhost:4000/api/auth/usertokenauth' 
   
    const data = fetch(url, {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json',
            
          }, 
          body:  JSON.stringify(codigo)
         })
         .then( resp =>  resp.json() )
         .then( data => { 
              console.log(data);   
              /*localStorage.setItem('data',JSON.stringify(data))
              localStorage.setItem('login', JSON.stringify(true))*/
              //let dataspotify = localStorage.getItem('login', JSON.parse(localStorage.getItem('data')))  
              return data
              
           })
         .catch( console.log() )
   
     return  data
   
    }else{
      console.log('no hay codigo');
    }
     



  }