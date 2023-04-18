import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Login = React.lazy(()=>import('./components/login/Login'));
const Register = React.lazy(()=>import('./components/register/Register'));
const Products = React.lazy(()=>import('./components/products/Products'));
const ProductDetails = React.lazy(()=>import('./components/products/details/ProductDetails'));
const Cart = React.lazy(()=>import('./components/cart/Cart'));
const Header = React.lazy(()=>import('./components/header/Header'));
const PageNotFound = React.lazy(()=>import('./components/pagenotfound/PageNotFound'));



function App() {
  return (
    <div>
      <Suspense fallback={<>....Loading</>}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>} exact/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/details/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
