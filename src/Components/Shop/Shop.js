import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    
    const handleCart = (product) => {
        const newCart = [...cart,product]
        setCart(newCart);
        console.log(newCart)
    }
    return (
        <div className='shop'>
            <div className='product'>
                {
                    product.map(products => <Product key={product.key}
                        products={products}
                        handleCart={handleCart}
                    ></Product>)
           }
            </div>
            <div className='inventory'>
                <h4>Order Summary</h4>
                <p>Products: {cart.length}</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h3>Grand Total: $1559</h3>
        </div>
        </div>
    );
};

export default Shop;