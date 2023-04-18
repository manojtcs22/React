import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from "../action/actionTypes"

const  initialState = {
    productsList:[],
    isloading: false
}
const productReducer = (state=initialState, action={}) => {
    switch(action.type){
        case FETCH_PRODUCTS_SUCCESS:
            return {...state,productsList: action.payload};
        case FETCH_PRODUCTS_ERROR:
            return {...state, error:action.payload}
        default: return state;
    }
}

export default productReducer;