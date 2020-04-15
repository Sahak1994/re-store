import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
    return (
        <main role="main" className="app container">
            <ShopHeader />
            <Switch>
                <Route path='/re-store/' exact component={HomePage} />
                <Route path='/re-store/home/' exact component={HomePage} />
                <Route path='/re-store/cart/' component={CartPage} />
                <Redirect to='/re-store/' />
            </Switch>
        </main>
    )
}

export default App;
