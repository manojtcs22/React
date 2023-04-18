const Product = ({product,children}) => {
    const {imgUrl,pName,description,price} = product;
    return (
        <li className="product-header" >
            <div><img src={imgUrl} width="100" height="150"/></div>
            <div>
                <p>Name: {pName}</p>
                <p>Description: {description}</p>
                <p>Price : {price}</p>
            </div>
            <div>{children}</div>
        </li>
    )
}
export default Product;