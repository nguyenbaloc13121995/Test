import * as ActionType from './../Constants/ActionType'
var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.FETCH_PRODUCT:
            return action.products
        default: return [...state]
    }
}

export default products;