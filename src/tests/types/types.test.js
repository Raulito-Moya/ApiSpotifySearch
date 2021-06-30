import { types } from "../../types/types";


describe('Pruebas en types.js', () => {

  test('los types deben ser iguales',()=> {


     expect(types).toEqual(

        {
         
         cleanError: "[ui] cleanErrorForm",
         errorPassword: "[ui] errorPassword",
         items: "[items] getitems",
         login: "[fetch] getUser",
         login: "[login] getUser",
         loginSpotify: "[login Spotify] getUser",
         logout: "[logout] logout",
         logoutSpotify: "[logout Spotify] logout",
         params: "[fetch] getParams",
         uierrorForm: "[ui] errorForm"

        }

     )



  })





})