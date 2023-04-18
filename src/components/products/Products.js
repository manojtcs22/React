import { useEffect, useState } from "react";
import { getData } from "../../apis/api";
import Product from "./Product";
import {useNavigate } from 'react-router-dom';
import { ADD_TO_CART, FETCH_PRODUCTS } from "../../redux/action/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/action/cartActions";
import { fetchProducts } from "../../redux/action/productActions";

const Products = () => {
    const [products,setProducts] = useState([]);
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    let history = useNavigate();
    console.log(useState());
    const {productsList} = useSelector(state=>state.products);
    useEffect(()=>{
        dispatch(fetchProducts());
      /*  getData('products').then((res)=>{
            setProducts(res.data)
        }).catch((err)=> {
            setError(err.message);
        })*/
    },[]);
    useEffect(()=>{
        setProducts(productsList);
    },[productsList.length]);

    const addToCart = (product) => {
       // dispatch({type:ADD_TO_CART,product})
       dispatch(cartActions.addToCart(product))
    }
    const viewMore = (id) => {
        history(`/details/${id}`);
    }
    return (
        <div>
            <div>
                <button onClick={()=>dispatch({type: FETCH_PRODUCTS})}>Refresh Products</button>
            </div>
            {
                products?.length ? <>
                {
                    products.map((product)=>{
                        return <Product product={product} key={product?.id} display={'flex'}>
                        <button onClick={()=>addToCart(product)}>Add to Cart </button>
                        <button onClick={()=>viewMore(product?.id)}>View More </button>
                        </Product>
                    })
                }
                
                </>:<h3>No product Found</h3>
            }
        </div>
    )
}
export default Products;