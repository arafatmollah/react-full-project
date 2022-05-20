import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navigation'>
            <img src={logo} alt=""></img>
            <div>
                <a href='/order'>Order</a>
                <a href='/order'>Order Review</a>
                <a href='/order'>Manage Inventory</a>
                <a href='/order'>Log In</a>
            </div>
        </nav>
    );
};

export default Header;