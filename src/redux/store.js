import {createStore, combineReducers} from 'redux'
import filterReducer from './reducers/filter'
import pizzaReducer from './reducers/pizza'

const rootReducer = combineReducers({
    filterReducer,
    pizzaReducer
})

const store = createStore(rootReducer)

export default store