import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../action/actionTypes";

const initialValue = {
    cartList:[],
    isLoading: false
}

const cartReducer = (state=initialValue,action={}) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {...state,cartList:[...state.cartList,action.payload]};
        case REMOVE_FROM_CART:
            return {...state,cartList:state.cartList.filter((item)=>item.id!=action.id)};
        case CLEAR_CART:
            return initialValue;
        default: return state;
        }
}
export default cartReducer;