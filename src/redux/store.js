import {createStore, combineReducers, applyMiddleware} from 'redux'
import filterReducer from './reducers/filter'
import pizzaReducer from './reducers/pizza'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    filterReducer,
    pizzaReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))
console.log(store);


export default store