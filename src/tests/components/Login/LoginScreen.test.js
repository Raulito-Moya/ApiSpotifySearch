import { mount } from "enzyme"
import React from 'react'
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import configureStore from 'redux-mock-store'

import { LoginScreen } from "../../../components/Login/LoginScreen"





const middlewares = [thunk]
const mockstore = configureStore( middlewares )


const initState = { ui:false }
let store = mockstore(initState)
store.dispatch = jest.fn();




const wrapper = mount(
    <Provider store={store}>
        <LoginScreen />
    </Provider>
)


/*jest.mock('../../../components/Login/LoginScreen', () => ({
    setFormStatus: jest.fn(),
   
  
}))*/


describe('Login Screen tests',()=> {

  test('debe renderiar el form correcto',() => {
  
     expect(wrapper).toMatchSnapshot()
     
  
  })
  
  
  test('debe de renderizar el LoginForm',() => {
     
     wrapper.find('button[className="btn"]').simulate('click')
    expect(wrapper).toMatchSnapshot()
  
  
  })
  
  
  test('debe de renderizar el CreateUserform',() => {
     
     wrapper.find('button[className="btn"]').simulate('click')
    expect(wrapper).toMatchSnapshot()
  
  
  })



})