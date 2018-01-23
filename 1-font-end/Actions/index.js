import * as ActionType from './../Constants/ActionType'
import apiCaller from './../utils/apiCaller'

//Get all product
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
//add product
export const addProduct = (product) => {
    return {
        type: ActionType.ADD_PRODUCT,
        product,
    }
}
export const addProductRequest = (product) => {
    return (dispatch) => {
        return apiCaller(`api/add-product`, 'POST', product).then(res => {
            dispatch(addProduct(res.data))
        })
    }
}
//delete product
export const deleteProduct = (id) => {
    return {
        type: ActionType.DELETE_PRODUCT,
        id,
    }
}
export const deleteProductRequest = (id) => {
    return dispatch => {
        return apiCaller(`api/${id}/delete-product`, 'DELETE', null).then(res => {
            dispatch(deleteProduct(id))
        })
    }
}
//EDIT PRODUCT
export const getEditProduct = (product) => {
    return {
        type: ActionType.EDIT_PRODUCT,
        product
    }
}
export const getEditProductRequest = (id) => {
    return dispatch => {
        apiCaller(`api/product/${id}`, 'GET', null).then(res => {
            dispatch(getEditProduct(res.data))
        })
    }
}
//UPDATE
export const actUpdateProduct = (product) => {
    return {
        type: ActionType.UPDATE_PRODUCT,
        product
    }
}
export const actUpdateProductRequest = (product) => {
    return dispatch => {
        apiCaller(`api/${product.id}/update-product`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
}
