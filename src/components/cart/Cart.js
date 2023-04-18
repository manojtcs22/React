import { useSelector,useDispatch } from "react-redux";
import { CLEAR_CART, REMOVE_FROM_CART } from "../../redux/action/actionTypes";
import { removeFromCart } from "../../redux/action/cartActions";
import Product from "../products/Product";

const Cart = () => {
    const {cartList,isLoading} = useSelector((state)=>state.cart);
    const dispatch=useDispatch();
    const removeFromCart = (id) => {
        dispatch({type:REMOVE_FROM_CART,id});
    }
    return (
        <div>
        {
            cartList?.length>0?<>
            <button onClick={()=>dispatch({type:CLEAR_CART})}>CLEAR CART</button>
            {
                cartList?.map((product)=>{
                    return <Product product={product} key={product?.id}>
                        <button onClick={()=>removeFromCart(product?.id)}>Remove From Cart</button>
                        <button>View More</button>
                    </Product>
                })
            }
            </>:<h3>
                No items in cart
            </h3>
        }
        </div>
    )
}
export default Cart;