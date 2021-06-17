import { types } from "../../types/types";


describe('Pruebas en types.js', () => {

  test('los types deben ser iguales',()=> {


     expect(types).toEqual(

        {
         
            params: '[fetch] getParams',

            login: '[fetch] getUser',
            logout: '[logout] logout',
        
            items: '[items] getitems',
        
            uierrorForm: '[ui] errorForm',
            cleanError: '[ui] cleanErrorForm',
            errorPassword: '[ui] errorPassword'

        }

     )



  })





})