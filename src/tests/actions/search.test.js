import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import { search } from "../../actions/search"
import { types } from '../../types/types';


const middlewares = [thunk]
const mockstore = configureStore( middlewares )

const initState = {}
let store = mockstore(initState)



describe('search action tests', ()=> {

    beforeEach(()=>{ //voy a renicializarlo
        store = mockstore( initState ) ;
        jest.clearAllMocks();
      })


   // 
   test('debe retornar una lista de items',async ()=> {
     let q = 'Arjona'
     let gettoken =  await fetch('http://localhost:4000/api/auth/token').then(res => res.json())
      let token = gettoken.token
      let type = 'album'
      let market = 'US'

      // console.log(token);
     

     await store.dispatch(search(token, q, type, market))

     const actions =  await store.getActions();

     expect( actions[0] ).toEqual({
         type: types.items,
         payload: expect.any(Array)
     })

   })   



})