import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name,img,seller,price,ratings } = props.products;
    return (
        <div className='details'>
            <img src={img} alt=""></img>
            <p className='name'>{name}</p>
            <p className='price'>Price: ${price}</p>
            <div className='info'>
            <p>Ratings: { ratings}</p>
            <p>Seller: {seller}</p>
        </div>
            <button onClick={()=>props.handleCart(props.products)} className='btn-cart'>
                <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                
        </button>
            
        </div>
         
    );
};

export default Product;