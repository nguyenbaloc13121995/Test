import {combineReducers} from 'redux'
import ProductReducer from './ProductReducers'
import ItemsEditting from './ItemsEditting'
const appReducer = combineReducers({
    ProductReducer,
    ItemsEditting
})

export default appReducer;