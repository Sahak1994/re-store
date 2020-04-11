import React from 'react';

import BookListContainer from '../../containers';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';

const HomePage = () => {
    return (
        <div>
            <BookListContainer />
            <ShoppingCartTable />
        </div>
    )
}

export default HomePage;