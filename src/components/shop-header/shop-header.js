import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './shop-header.css';

const ShopHeader = ({ numItems, total, countTotal, orderTotal }) => {

    return (
        <header className="shop-header row">
             <Link to="/re-store/home">
                <div className="logo text-dark">ReStore</div>
            </Link>
            <Link to="/re-store/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {countTotal} items (${orderTotal})
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({ shoppingCart : { countTotal, orderTotal }}) => {
    return {
        countTotal,
        orderTotal,
    }
}

export default connect(mapStateToProps)(ShopHeader);