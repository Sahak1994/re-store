import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {

    return (
        <Switch>
            <Route path='/re-store/'
                component={HomePage}
                exact />
            <Route path='/re-store/cart'
                component={CartPage} />
        </Switch>
    )
}

export default App;