import * as ActionType from './../Constants/ActionType'
import apiCaller from './../utils/apiCaller'


export const actFetchProducts = (products) => {
    return {
        type: ActionType.FETCH_PRODUCT,
        products
    }
}

export const actFetchProductRequest = () => {
    return (dispatch) => {
        return apiCaller('api/product-list', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}