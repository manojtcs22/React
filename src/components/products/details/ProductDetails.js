import { useEffect, useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { getData } from '../../../apis/api';
import Product from '../Product';
const ProductDetails = () => {
    let navigate = useNavigate();
    let params = useParams();
    const [product,setProduct] = useState([]);
    const [error,setError] = useState('');
    useEffect(()=>{
        getData(`products/${params.id}`).then((res)=>{
            setProduct(res.data);
        }).catch ((err)=>{
            setError(err.message);
        }).finally(()=>{
            console.log("Completed")
        })
    },[params.id])
    return (
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <Product product={product}>
                <button>Add to Cart</button>
            </Product>
        </div>
    )
}
export default ProductDetails;