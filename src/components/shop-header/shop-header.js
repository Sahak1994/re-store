import React from 'react';
import { Link } from 'react-router-dom';

import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {

    return (
        <header className="shop-header row">
             <Link to="/re-store/home">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/re-store/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

export default ShopHeader;