import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
const Header = () => {
    const cartCount = useSelector((state)=>state.cart.cartList);
    
    return (
    <>
        <Link to="/login">Login |</Link>
        <Link to="/register">Register |</Link>
        <Link to="/products">Products |</Link>
        <Link to="/cart">Cart ({cartCount?.length??0})</Link>
        
    </>
    )
}
export default Header;