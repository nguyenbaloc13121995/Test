import * as ActionType from './../Constants/ActionType'
var initialState = [];

var findindex = (products, id) => {
    var result = -1;
    result = products.map((p, i) => {
        if (p.id == id) {
            result = i;
        }
    })
    return result;
}

const products = (state = initialState, action) => {
    var index = -1;
    var { id,product } = action
    switch (action.type) {
        case ActionType.FETCH_PRODUCT:
            return action.products
        case ActionType.ADD_PRODUCT:
            state.push(action.product)
            return [...state]
        case ActionType.DELETE_PRODUCT:
            index = findindex(state, id)
            state.splice(index, 1)
            return [...state]
        case ActionType.UPDATE_PRODUCT: 
            index = findindex(state,product.id)
            state[index]=product
            return [...state]
        default: return [...state]
    }
}

export default products;