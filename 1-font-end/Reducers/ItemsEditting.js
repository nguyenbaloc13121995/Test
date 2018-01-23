import * as ActionType from './../Constants/ActionType'

var inititalState = []

const itemsEditting = (state = inititalState, action) => {
    switch (action.type) {
        case ActionType.EDIT_PRODUCT:
            return action.product
        default : return state;
    }
}

export default itemsEditting;