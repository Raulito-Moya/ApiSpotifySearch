import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { items } from '../reducers/itemsReducer';
import { params } from '../reducers/paramsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;




const reducers = combineReducers({ 
    params: params,
    auth: authReducer,
    items: items
 })
 
 
 export const store = createStore(
     reducers,
     composeEnhancers(
        applyMiddleware(thunk)
    )
 
 );
