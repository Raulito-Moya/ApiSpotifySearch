import { cleanError, errorFormLogin } from "../../actions/ui"




 describe('ui action tests',()=>{

    test('debe de retornar una objeto',()=> {
         
       const data = { nombre: 'algo', edad:'algo'}

       expect(errorFormLogin(data)).toEqual({
          payload: data,
          type: "[ui] errorForm"
       })

       expect(cleanError()).toEqual({
          type:"[ui] cleanErrorForm"
       })

    })


    


 })