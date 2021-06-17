import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import { createAcount } from '../../actions/logintoken';
import { types } from '../../types/types';
import * as fetchModule from '../../helpers/UserLogin'

const middlewares = [thunk]
const mockstore = configureStore( middlewares )

const initState = {}
let store = mockstore(initState)



describe(' logintoken accion test',()=> {
      
    beforeEach(()=>{ //voy a renicializarlo
        store = mockstore( initState ) ;
        
        jest.clearAllMocks();
      })


   test('Crear una cuenta de usuario correctamente', async()=> {

    fetchModule.sendAcountData = jest.fn(() => ({  //aqui estoy simulando el Register para que la prueba siga pasando y no tener que cambiarle los valores
        json() {
            return {
              user: {
                ok: true,
                uid: '123',
                name: 'carlos',
                correo:'carlos@gmail.com'
              } ,
                token: 'ABC123ABC123'
            }
        }  

     }));


      let data = {
          nombre: 'Test',
          password: '1234test',
          correo: 'Test10@gmail.com'
      }

     await store.dispatch( createAcount(data) )

     const actions = await store.getActions()
    
     expect( actions[0] ).toEqual({
          type: types.login,
          payload: {
              token: expect.any(String),
              user: expect.any(Object)
          }
     })


      
     
   })


 
//jest.clearAllMocks();


   test('crear una cuenta de usuario incorrectamente',async()=> {
         
       fetchModule.sendAcountData = jest.fn(() => ({  //aqui estoy simulando el Register para que la prueba siga pasando y no tener que cambiarle los valores
           json() {
               return {
                 msg: {
                   msg: "Un usuario ya existe con ese email"
                 } ,
                
               }
           }  
   
        }));
   
   
   
         let data = {
             nombre: 'Rauly',
             password: '123456',
             correo: 'test4@test.com'
         }
   
        await store.dispatch( createAcount(data) )
   
        const actions = await store.getActions()
        console.log(actions);
        expect( actions[0] ).toEqual({
             type: types.uierrorForm,
             payload: {
                 msg: expect.any(Object)
             }
        })
   
   
     })

})

// el loginUser User y el getuserSpecificID no los voy a probar ya que es similar al create account