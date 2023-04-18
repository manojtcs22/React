import { getData } from "../../apis/api"
import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from "./actionTypes";

export const fetchProducts = () => {
    return (async (dispatch)=> {
        try {
            let response = await getData('products');
            dispatch(fetchProductsSuccess(response.data))
        } catch (error) {
            dispatch(fetchProductsError(error.message))
        }
    })
}

export const fetchProductsSuccess = (payload) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload
    }
}

export const fetchProductsError = (payload) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload
    }
}