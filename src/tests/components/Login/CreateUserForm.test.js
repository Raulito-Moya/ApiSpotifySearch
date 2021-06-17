import thunk from "redux-thunk";
import configureStore from 'redux-mock-store'

import { CreateUserForm } from "../../../components/Login/CreateUserForm";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createAcount } from "../../../actions/logintoken";


const middlewares = [thunk]
const mockstore = configureStore( middlewares )
   
jest.mock('../../../actions/logintoken', () => ({
  createAcount: jest.fn()

}))

const initState = {auth:{
   login: true
}}

let store = mockstore(initState)
store.dispatch = jest.fn();




Storage.prototype.setItem = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CreateUserForm />
    </Provider>
)





describe('CreateUserForm tests',()=> {
      
  beforeEach(()=>{
    jest.clearAllMocks()

  })
  
  test('debe mostrarse correctemente',()=> {

      expect(wrapper).toMatchSnapshot()

    })
  

  test('crear usuario', ()=> {
  
      wrapper.find('input[name="nombre"]').simulate('change', {
        target: {
            name: 'nombre',
            value: 'Juan'
        }
    })
  
    wrapper.find('input[name="correo"]').simulate('change', {
      target: {
          name: 'correo',
          value: 'Juan@gmail.com'
      }
     })
  
  
     wrapper.find('input[name="password"]').simulate('change', {
      target: {
          name: 'password',
          value: '123456'
      }
     })
  
     wrapper.find('input[name="confirmPassword"]').simulate('change', {
      target: {
          name: 'confirmPassword',
          value: '123456'
      }
     })
  
     wrapper.find('button[className="buttom"]').simulate('click')
  
  
      
      expect(createAcount).toHaveBeenCalled()
   
   expect( localStorage.setItem ).toHaveBeenCalledWith('login','true')   //to do me da un  error en aqui en la prueba

  })  
  

})

